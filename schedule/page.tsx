"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Bell, AlertTriangle, Truck, Loader2, CheckCircle2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SchedulePage() {
  const { toast } = useToast()
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [scheduleLoaded, setScheduleLoaded] = useState(false)

  // Mock data for waste collection schedule
  const [weeklySchedule, setWeeklySchedule] = useState([
    { day: "Monday", type: "General Waste", time: "8:00 AM - 10:00 AM" },
    { day: "Wednesday", type: "Recyclables", time: "9:00 AM - 11:00 AM" },
    { day: "Friday", type: "Organic Waste", time: "8:00 AM - 10:00 AM" },
  ])

  // Mock data for upcoming holidays
  const holidays = [
    { date: "March 8, 2025", name: "Holi", message: "No collection. Will be collected on March 9." },
    { date: "August 15, 2025", name: "Independence Day", message: "Collection delayed by 2 hours." },
    { date: "October 2, 2025", name: "Gandhi Jayanti", message: "No collection. Will be collected on October 3." },
  ]

  const updateSchedule = () => {
    if (!address.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your address to get your collection schedule.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Different schedule based on address input
      if (address.toLowerCase().includes("park")) {
        setWeeklySchedule([
          { day: "Tuesday", type: "General Waste", time: "9:00 AM - 11:00 AM" },
          { day: "Thursday", type: "Recyclables", time: "10:00 AM - 12:00 PM" },
          { day: "Saturday", type: "Organic Waste", time: "9:00 AM - 11:00 AM" },
        ])
      } else if (address.toLowerCase().includes("main")) {
        setWeeklySchedule([
          { day: "Monday", type: "General Waste", time: "7:00 AM - 9:00 AM" },
          { day: "Wednesday", type: "Recyclables", time: "8:00 AM - 10:00 AM" },
          { day: "Friday", type: "Organic Waste", time: "7:00 AM - 9:00 AM" },
        ])
      }

      setIsLoading(false)
      setScheduleLoaded(true)

      toast({
        title: "Schedule Updated",
        description: "Your waste collection schedule has been updated based on your location.",
      })
    }, 1500)
  }

  const setReminder = (day, type) => {
    toast({
      title: "Reminder Set",
      description: `You'll be notified before the ${type} collection on ${day}.`,
    })
  }

  const savePreferences = () => {
    toast({
      title: "Preferences Saved",
      description: "Your notification preferences have been updated.",
    })
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Waste Collection Schedule</h1>
          <p className="text-muted-foreground">
            View your personalized waste collection schedule and set up notifications.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-semibold">Your Location</h2>
            <p className="text-sm text-muted-foreground">
              Enter your address to get a personalized collection schedule.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-3">
              <Input
                placeholder="Enter your address or area"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button onClick={updateSchedule} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="weekly">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
            <TabsTrigger value="holidays">Holiday Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="space-y-4 pt-4">
            {scheduleLoaded && (
              <div className="rounded-lg bg-green-50 p-4 mb-4 text-green-800 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <p>Schedule updated for: {address}</p>
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              {weeklySchedule.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      {item.day}
                    </CardTitle>
                    <CardDescription>{item.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{item.time}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => setReminder(item.day, item.type)}
                    >
                      <Bell className="mr-2 h-4 w-4" />
                      Set Reminder
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Special Collection</CardTitle>
                <CardDescription>
                  For large items or additional waste that doesn't fit in your regular bin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Available on request</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => (window.location.href = "/services")}>
                  Request Special Collection
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="holidays" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Holiday Schedule Changes</CardTitle>
                <CardDescription>Waste collection schedule may change during holidays.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holidays.map((holiday, index) => (
                    <div key={index} className="flex gap-4 rounded-lg border p-4">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <div>
                        <h3 className="font-medium">
                          {holiday.date} - {holiday.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{holiday.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to be notified about waste collection.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="app-notifications" className="flex flex-col space-y-1">
                <span>App Notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive push notifications on your device
                </span>
              </Label>
              <Switch id="app-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="sms-notifications" className="flex flex-col space-y-1">
                <span>SMS Notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive text messages about collection
                </span>
              </Label>
              <Switch id="sms-notifications" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                <span>Email Notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive email updates about schedule changes
                </span>
              </Label>
              <Switch id="email-notifications" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={savePreferences}>
              Save Preferences
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
