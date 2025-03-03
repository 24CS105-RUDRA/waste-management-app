import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, AlertTriangle, Award, ArrowRight, Truck, Recycle, Leaf, Gift, Star, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Smart Waste Management for a Cleaner Jamnagar
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Join our initiative to keep Jamnagar clean and green. Track waste collection, report issues, and earn
              rewards for responsible waste management.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/schedule">
                  <Calendar className="mr-2 h-5 w-5" />
                  Check Collection Schedule
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/report">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Report an Issue
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/rewards">
                  <Award className="mr-2 h-5 w-5" />
                  Earn Rewards
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Waste management illustration"
              width={500}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Making Waste Management Easier for Everyone
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our app simplifies waste management with real-time updates, easy reporting, and special service requests.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Collection Schedule</h3>
              <p className="text-muted-foreground">
                Get personalized waste collection schedules based on your location and receive timely notifications.
              </p>
              <Link href="/schedule" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                View Schedule <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Report Issues</h3>
              <p className="text-muted-foreground">
                Easily report missed collections, overflowing bins, or other waste-related issues with photo evidence.
              </p>
              <Link href="/report" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Report Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Additional Services</h3>
              <p className="text-muted-foreground">
                Request special pickups for large items, bulk waste, or schedule additional collections for events.
              </p>
              <Link href="/services" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Request Service <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Rewards Program
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Rewarded for Responsible Waste Management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Earn points for proper waste disposal, recycling, and community participation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Recycling Points</h3>
              <p className="text-muted-foreground">
                Earn points for properly sorting and recycling different types of waste materials.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>5 points for plastic recycling</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>10 points for e-waste recycling</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>3 points for paper recycling</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Activity Rewards</h3>
              <p className="text-muted-foreground">
                Get points for actively participating in waste management activities.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>20 points for reporting issues</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>50 points for cleanup participation</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>15 points for waste reduction</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Redeem Rewards</h3>
              <p className="text-muted-foreground">Exchange your earned points for various rewards and benefits.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>Discount coupons for local stores</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>Free waste collection services</span>
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-amber-500" />
                  <span>Eco-friendly product vouchers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">
              <Award className="mr-2 h-5 w-5" />
              Join Rewards Program
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Benefits of Using CleanJam</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of Jamnagar residents who are making a difference.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Environmental Impact</h3>
                <p className="text-muted-foreground">
                  Contribute to a cleaner environment by ensuring proper waste disposal and recycling.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Reward System</h3>
                <p className="text-muted-foreground">
                  Earn points for responsible waste management that can be redeemed for various benefits.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Timely Updates</h3>
                <p className="text-muted-foreground">
                  Never miss a collection with timely notifications and schedule updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Special Services</h3>
                <p className="text-muted-foreground">
                  Easy access to special waste collection services for non-standard waste.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Issue Resolution</h3>
                <p className="text-muted-foreground">
                  Quick resolution of waste-related issues with transparent tracking.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Recycle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Recycling Guidance</h3>
                <p className="text-muted-foreground">
                  Learn how to properly sort and recycle different types of waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary/10 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the Movement for a Cleaner Jamnagar
              </h2>
              <p className="mt-4 text-lg">Download the app today and be part of the solution.</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg">Download App</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
