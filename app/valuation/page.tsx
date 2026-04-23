"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { trackConversion, getUTMParams } from "@/lib/analytics"

const valuationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip_code: z.string().min(5, "ZIP code must be at least 5 digits"),
  property_type: z.string().min(1, "Please select a property type"),
  bedrooms: z.number().min(1, "Number of bedrooms is required"),
  bathrooms: z.number().min(1, "Number of bathrooms is required"),
  square_feet: z.number().min(100, "Square footage is required"),
  year_built: z.number().optional(),
  additional_info: z.string().optional(),
})

type ValuationFormData = z.infer<typeof valuationSchema>

export default function ValuationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
  })

  const onSubmit = async (data: ValuationFormData) => {
    setIsSubmitting(true)
    
    // Track conversion
    trackConversion('ValuationLead', {
      content_name: 'Home Valuation Form',
      content_category: 'Direct Form',
      value: 1
    })
    
    try {
      // Get UTM parameters from URL
      const utmParams = getUTMParams()
      
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          ...utmParams
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-lg">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-black mb-4">Thank You!</h1>
            <p className="text-lg text-slate-600 mb-8">
              Your home valuation request has been received. I&apos;ll review your information and get back to you within 24 hours with a comprehensive market analysis.
            </p>
            <LinkButton href="/" size="lg" className="w-full">
              Return to Homepage
            </LinkButton>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-black tracking-tight">Laura Norman</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Orlando, Florida</span>
            </Link>
            <LinkButton variant="outline" href="/">
              Back to Home
            </LinkButton>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-12 w-12 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black">My Home ROI</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Let me provide you with a complimentary, expert home valuation
          </p>
          <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6 text-left">
            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-secondary">✓</span> Why provide detailed information?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The more I know about your property, the more accurate and personalized your valuation will be. 
              This helps me provide you with a precise market analysis, compare your home to similar properties 
              in Orlando, and identify features that add value. Your information is kept confidential and used 
              solely to give you the best possible service.
            </p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-black mb-2">Contact Information</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    So I can send you your personalized valuation report and answer any questions you may have.
                  </p>
                  <div className="grid gap-6">
                    <div>
                      <Label htmlFor="full_name" className="text-slate-700">Full Name *</Label>
                      <Input
                        id="full_name"
                        {...register("full_name")}
                        className="mt-1"
                        placeholder="John Smith"
                      />
                      {errors.full_name && (
                        <p className="text-sm text-red-600 mt-1">{errors.full_name.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-slate-700">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-1"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-slate-700">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="mt-1"
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-xl font-serif font-semibold text-black mb-2">Property Details</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    These details help me analyze comparable sales, assess your home's unique features, and provide an accurate market value based on current Orlando real estate trends.
                  </p>
                  <div className="grid gap-6">
                    <div>
                      <Label htmlFor="address" className="text-slate-700">Street Address *</Label>
                      <Input
                        id="address"
                        {...register("address")}
                        className="mt-1"
                        placeholder="123 Main Street"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city" className="text-slate-700">City *</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          className="mt-1"
                          placeholder="Orlando"
                        />
                        {errors.city && (
                          <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="state" className="text-slate-700">State *</Label>
                        <Input
                          id="state"
                          {...register("state")}
                          className="mt-1"
                          placeholder="FL"
                        />
                        {errors.state && (
                          <p className="text-sm text-red-600 mt-1">{errors.state.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="zip_code" className="text-slate-700">ZIP Code *</Label>
                        <Input
                          id="zip_code"
                          {...register("zip_code")}
                          className="mt-1"
                          placeholder="32801"
                        />
                        {errors.zip_code && (
                          <p className="text-sm text-red-600 mt-1">{errors.zip_code.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="property_type" className="text-slate-700">Property Type *</Label>
                      <Select
                        id="property_type"
                        {...register("property_type")}
                        className="mt-1"
                      >
                        <option value="">Select a type</option>
                        <option value="single-family">Single Family Home</option>
                        <option value="condo">Condominium</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="land">Land</option>
                        <option value="other">Other</option>
                      </Select>
                      {errors.property_type && (
                        <p className="text-sm text-red-600 mt-1">{errors.property_type.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bedrooms" className="text-slate-700">Bedrooms *</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          {...register("bedrooms", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="3"
                        />
                        {errors.bedrooms && (
                          <p className="text-sm text-red-600 mt-1">{errors.bedrooms.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="bathrooms" className="text-slate-700">Bathrooms *</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          step="0.5"
                          {...register("bathrooms", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="2"
                        />
                        {errors.bathrooms && (
                          <p className="text-sm text-red-600 mt-1">{errors.bathrooms.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="square_feet" className="text-slate-700">Square Feet *</Label>
                        <Input
                          id="square_feet"
                          type="number"
                          {...register("square_feet", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="2000"
                        />
                        {errors.square_feet && (
                          <p className="text-sm text-red-600 mt-1">{errors.square_feet.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="year_built" className="text-slate-700">Year Built</Label>
                        <Input
                          id="year_built"
                          type="number"
                          {...register("year_built", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="2000"
                        />
                        {errors.year_built && (
                          <p className="text-sm text-red-600 mt-1">{errors.year_built.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additional_info" className="text-slate-700">Additional Information</Label>
                      <Textarea
                        id="additional_info"
                        {...register("additional_info")}
                        className="mt-1"
                        placeholder="Any recent renovations, special features, or additional details..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={isSubmitting} className="flex-1 shadow-lg hover:shadow-xl transition-all">
                  {isSubmitting ? "Submitting..." : "Get Free Valuation"}
                </Button>
                <LinkButton variant="outline" href="/">
                  Cancel
                </LinkButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
