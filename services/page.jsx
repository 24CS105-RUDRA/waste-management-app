"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Package, Clock, CheckCircle2, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ServicesPage() {
  const { toast } = useToast()
  const [serviceType, setServiceType] = useState("")
  const [address, setAddress] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [wasteDetails, setWasteDetails] = useState("")
  const [wasteVolume, setWasteVolume] = useState("medium")
  const [contact, setContact] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = () => {
    // Validate form
    if (!serviceType) {
      toast({
        title: "Missing Information",
        description: "Please select a service type.",
        variant: "destructive",
      })
      return
    }

    if (!address) {
      toast({
        title: "Missing Information",
        description: "Please provide your address.",
        variant: "destructive",
      })
      return
    }

    if (!date) {
      toast({
        title: "Missing Information",
        description: "Please select a preferred date.",
        variant: "destructive",
      })
      return
    }

    if (!time) {
      toast({
        title: "Missing Information",
        description: "Please select a preferred time.",
        variant: "destructive",
      })
      return
    }

    if (!contact) {
      toast({
        title: "Missing Information",
        description: "Please provide your contact number.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowConfirmation(true)

      toast({
        title: "Request Submitted",
        description: "Your service request has been submitted successfully.",
      })
    }, 2000)
  }

  const resetForm = () => {
    setServiceType("")
    setAddress("")
    setDate("")
    setTime("")
    setWasteDetails("")
    setWasteVolume("medium")
    setContact("")
    setShowConfirmation(false)
  }

  const requestPickup = (type: string) => {
    setServiceType(type)
    window.scrollTo({
      top: document.getElementById("request-form")?.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Request Additional Services</h1>
          <p className="text-muted-foreground">
            Request special waste collection services for large items or bulk waste.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-2">Large Waste Pickup</CardTitle>
              <CardDescription>Request pickup for large items that don't fit in regular bins.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Furniture, appliances, and other large household items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Construction debris (limited quantities)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Garden waste and tree trimmings</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => requestPickup("large-waste")}>
                Request Pickup
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-2">Bulk Waste Collection</CardTitle>
              <CardDescription>Request collection for large quantities of waste after events.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Post-event cleanup (weddings, parties, gatherings)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Seasonal cleaning waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Moving or renovation waste</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => requestPickup("bulk-waste")}>
                Request Collection
              </Button>
            </CardFooter>
          </Card>
        </div>

        {showConfirmation ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-green-600">Request Confirmed!</CardTitle>
              <CardDescription className="text-center">
                Your service request has been submitted successfully.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <p>
                  <strong>Service Type:</strong>{" "}
                  {serviceType === "large-waste" ? "Large Waste Pickup" : "Bulk Waste Collection"}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
                <p>
                  <strong>Date & Time:</strong> {date},{" "}
                  {time === "morning"
                    ? "Morning (8 AM - 12 PM)"
                    : time === "afternoon"
                      ? "Afternoon (12 PM - 4 PM)"
                      : "Evening (4 PM - 7 PM)"}
                </p>
                <p>
                  <strong>Waste Volume:</strong> {wasteVolume.charAt(0).toUpperCase() + wasteVolume.slice(1)}
                </p>
                <p>
                  <strong>Contact:</strong> {contact}
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                You will receive a confirmation call within 24 hours of your request.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={resetForm}>
                Submit Another Request
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card id="request-form">
            <CardHeader>
              <CardTitle>Request Form</CardTitle>
              <CardDescription>Fill out the form below to request a special waste collection service.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service-type">Service Type</Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="large-waste">Large Waste Pickup</SelectItem>
                    <SelectItem value="bulk-waste">Bulk Waste Collection</SelectItem>
                    <SelectItem value="hazardous-waste">Hazardous Waste Disposal</SelectItem>
                    <SelectItem value="e-waste">E-Waste Collection</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Collection Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waste-details">Waste Details</Label>
                <Textarea
                  id="waste-details"
                  placeholder="Please describe the type and quantity of waste to be collected"
                  className="min-h-[120px]"
                  value={wasteDetails}
                  onChange={(e) => setWasteDetails(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Waste Volume</Label>
                <RadioGroup value={wasteVolume} onValueChange={setWasteVolume} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">Small (fits in a car trunk)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium (fits in a pickup truck)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">Large (requires a special truck)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input
                  id="contact"
                  placeholder="Enter your phone number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                You will receive a confirmation call within 24 hours of your request.
              </p>
            </CardFooter>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Your Service Requests</CardTitle>
            <CardDescription>Track the status of your service requests.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Large Waste Pickup</h3>
                      <p className="text-sm text-muted-foreground">Requested for March 20, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    <Clock className="mr-1 h-3 w-3" />
                    Scheduled
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Address: 123 Main Street, Jamnagar</p>
                  <p>Time: Morning (8 AM - 12 PM)</p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Bulk Waste Collection</h3>
                      <p className="text-sm text-muted-foreground">Requested for March 5, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Completed
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Address: 456 Park Avenue, Jamnagar</p>
                  <p>Time: Afternoon (12 PM - 4 PM)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
