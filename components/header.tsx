"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Recycle, User, LogOut, Award } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function Header() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CleanJam</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/schedule" className="text-sm font-medium hover:text-primary">
            Collection Schedule
          </Link>
          <Link href="/report" className="text-sm font-medium hover:text-primary">
            Report Issue
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            Additional Services
          </Link>
          {user && (
            <Link href="/rewards" className="text-sm font-medium hover:text-primary">
              Rewards
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Open user menu</span>
                  {user.points > 0 && (
                    <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {user.points}
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/rewards" className="flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Rewards</span>
                    <span className="ml-auto bg-primary/10 px-2 py-0.5 rounded-full text-xs font-medium">
                      {user.points} pts
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive cursor-pointer"
                  onSelect={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm" className="hidden md:flex" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" className="hidden md:flex" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/schedule"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Collection Schedule
                </Link>
                <Link
                  href="/report"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Report Issue
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Additional Services
                </Link>
                {user && (
                  <Link
                    href="/rewards"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Rewards
                  </Link>
                )}
                <div className="flex flex-col gap-2 mt-4">
                  {user ? (
                    <Button
                      variant="destructive"
                      onClick={() => {
                        handleSignOut()
                        setIsOpen(false)
                      }}
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/sign-in">Sign In</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register">Register</Link>
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
