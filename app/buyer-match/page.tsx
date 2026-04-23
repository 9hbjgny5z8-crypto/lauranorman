"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Home, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { trackConversion, getUTMParams } from "@/lib/analytics"

const buyerMatchSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  looking_to_buy: z.string().min(1, "Please select a timeframe"),
  preferred_locations: z.string().min(2, "Please specify your preferred locations"),
  min_budget: z.number().min(0, "Minimum budget is required"),
  max_budget: z.number().min(0, "Maximum budget is required"),
  property_type: z.string().min(1, "Please select a property type"),
  min_bedrooms: z.number().min(1, "Number of bedrooms is required"),
  min_bathrooms: z.number().min(1, "Number of bathrooms is required"),
  must_haves: z.string().optional(),
  additional_info: z.string().optional(),
})

type BuyerMatchFormData = z.infer<typeof buyerMatchSchema>

export default function BuyerMatchPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BuyerMatchFormData>({
    resolver: zodResolver(buyerMatchSchema),
  })

  const onSubmit = async (data: BuyerMatchFormData) => {
    setIsSubmitting(true)
    
    // Track conversion
    trackConversion('BuyerLead', {
      content_name: 'Buyer Match Form',
      content_category: 'Direct Form',
      value: 1
    })
    
    try {
      // Get UTM parameters from URL
      const utmParams = getUTMParams()
      
      const response = await fetch("/api/buyer-match", {
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
              I&apos;ll personally review your preferences and connect you with properties that match your dream home criteria. Expect to hear from me within 24 hours with curated recommendations.
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
            <Home className="h-12 w-12 text-black" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black">MoveMatch</h1>
          </div>
          <p className="text-lg text-slate-600">
            Let me find your perfect Orlando home
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-black mb-4">Contact Information</h3>
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
                  <h3 className="text-xl font-serif font-semibold text-black mb-4">Your Dream Home</h3>
                  <div className="grid gap-6">
                    <div>
                      <Label htmlFor="looking_to_buy" className="text-slate-700">When are you looking to buy? *</Label>
                      <Select
                        id="looking_to_buy"
                        {...register("looking_to_buy")}
                        className="mt-1"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediately">Immediately (0-30 days)</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="just-browsing">Just browsing</option>
                      </Select>
                      {errors.looking_to_buy && (
                        <p className="text-sm text-red-600 mt-1">{errors.looking_to_buy.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="preferred_locations" className="text-slate-700">Preferred Locations *</Label>
                      <Input
                        id="preferred_locations"
                        {...register("preferred_locations")}
                        className="mt-1"
                        placeholder="e.g., Winter Park, Lake Nona, Dr. Phillips"
                      />
                      {errors.preferred_locations && (
                        <p className="text-sm text-red-600 mt-1">{errors.preferred_locations.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="min_budget" className="text-slate-700">Minimum Budget *</Label>
                        <Input
                          id="min_budget"
                          type="number"
                          {...register("min_budget", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="250000"
                        />
                        {errors.min_budget && (
                          <p className="text-sm text-red-600 mt-1">{errors.min_budget.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="max_budget" className="text-slate-700">Maximum Budget *</Label>
                        <Input
                          id="max_budget"
                          type="number"
                          {...register("max_budget", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="500000"
                        />
                        {errors.max_budget && (
                          <p className="text-sm text-red-600 mt-1">{errors.max_budget.message}</p>
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
                        <option value="any">Any</option>
                      </Select>
                      {errors.property_type && (
                        <p className="text-sm text-red-600 mt-1">{errors.property_type.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="min_bedrooms" className="text-slate-700">Minimum Bedrooms *</Label>
                        <Input
                          id="min_bedrooms"
                          type="number"
                          {...register("min_bedrooms", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="3"
                        />
                        {errors.min_bedrooms && (
                          <p className="text-sm text-red-600 mt-1">{errors.min_bedrooms.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="min_bathrooms" className="text-slate-700">Minimum Bathrooms *</Label>
                        <Input
                          id="min_bathrooms"
                          type="number"
                          step="0.5"
                          {...register("min_bathrooms", { valueAsNumber: true })}
                          className="mt-1"
                          placeholder="2"
                        />
                        {errors.min_bathrooms && (
                          <p className="text-sm text-red-600 mt-1">{errors.min_bathrooms.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="must_haves" className="text-slate-700">Must-Have Features</Label>
                      <Input
                        id="must_haves"
                        {...register("must_haves")}
                        className="mt-1"
                        placeholder="e.g., Pool, Garage, Backyard, Modern Kitchen"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additional_info" className="text-slate-700">Additional Information</Label>
                      <Textarea
                        id="additional_info"
                        {...register("additional_info")}
                        className="mt-1"
                        placeholder="Tell me more about your ideal home, lifestyle needs, or any special requirements..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  size="lg"
                  className="flex-1"
                >
                  {isSubmitting ? "Submitting..." : "Find My Perfect Match"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
