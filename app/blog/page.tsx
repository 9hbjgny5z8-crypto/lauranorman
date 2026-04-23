import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Home } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                  Laura Norman
                </h1>
                <p className="text-sm text-slate-600 uppercase tracking-wider">Orlando, Florida</p>
              </div>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Orlando Real Estate Insights
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Market updates, buying & selling tips, and local neighborhood guides to help you make informed real estate decisions in Central Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            {blogPosts.length === 1 && (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">
                  More articles coming soon! Check back for the latest Orlando real estate insights.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're buying or selling in Orlando, I'm here to help you navigate the market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/valuation" 
                className="px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-slate-100 transition-colors"
              >
                Get Home Valuation
              </Link>
              <Link 
                href="/buyer-match" 
                className="px-8 py-3 bg-secondary text-white rounded font-semibold hover:bg-secondary/90 transition-colors"
              >
                Find Your Dream Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-400 text-sm mb-4">
              Laura Norman | Wemert Group Realty | Orlando, Florida
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
