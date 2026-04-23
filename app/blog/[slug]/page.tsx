import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Home, ArrowLeft, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
            <div className="flex items-center gap-4">
              <Link 
                href="/blog" 
                className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <Link 
                href="/" 
                className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-600 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <span className="text-slate-400">•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="blog-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex gap-6 items-start">
                <Image 
                  src="/images/laura-headshot.png" 
                  alt="Laura Norman" 
                  width={80} 
                  height={80}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">
                    About Laura Norman
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Laura is a dedicated real estate professional serving the Orlando, Florida market with Wemert Group Realty. With deep local knowledge and a personal approach, she helps buyers and sellers navigate Central Florida's real estate market with confidence.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/valuation" 
                      className="text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      Get Home Valuation →
                    </Link>
                    <Link 
                      href="/buyer-match" 
                      className="text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      Find Your Home →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-secondary transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

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
