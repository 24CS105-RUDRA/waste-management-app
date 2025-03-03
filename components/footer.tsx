import Link from "next/link"
import { Recycle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CleanJam</span>
            </div>
            <p className="text-sm text-muted-foreground">Smart waste management for a cleaner Jamnagar</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/schedule" className="text-sm text-muted-foreground hover:text-foreground">
                  Waste Collection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Bulk Waste Pickup
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Special Waste Disposal
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/report" className="text-sm text-muted-foreground hover:text-foreground">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CleanJam. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
