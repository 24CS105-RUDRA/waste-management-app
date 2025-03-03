"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Award, Gift, Star, Trophy, Zap, ArrowRight, CheckCircle2, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

const TIER_THRESHOLDS = {
  bronze: 0,
  silver: 100,
  gold: 500,
  platinum: 1000,
}

const REWARDS = [
  {
    id: 1,
    name: "Free Waste Collection",
    description: "One-time free waste collection service",
    points: 50,
    icon: Gift,
  },
  {
    id: 2,
    name: "10% Store Discount",
    description: "Discount at partner eco-friendly stores",
    points: 100,
    icon: Gift,
  },
  {
    id: 3,
    name: "Premium Recycling Kit",
    description: "High-quality sorting bins and bags",
    points: 200,
    icon: Gift,
  },
]

const ACTIVITIES = [
  {
    id: 1,
    name: "Recycling Drop-off",
    points: 10,
    description: "Drop off recyclable materials at collection centers",
  },
  {
    id: 2,
    name: "Report Issues",
    points: 5,
    description: "Report waste management issues in your area",
  },
  {
    id: 3,
    name: "Community Cleanup",
    points: 50,
    description: "Participate in organized community cleanup events",
  },
]

export default function RewardsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [selectedReward, setSelectedReward] = useState<number | null>(null)

  if (!user) {
    return null // or loading state
  }

  const currentTier = user.tier
  const nextTier =
    currentTier === "platinum"
      ? null
      : currentTier === "gold"
        ? "platinum"
        : currentTier === "silver"
          ? "gold"
          : "silver"

  const pointsToNextTier = nextTier ? TIER_THRESHOLDS[nextTier] - user.points : 0

  const progress = nextTier
    ? ((user.points - TIER_THRESHOLDS[currentTier]) / (TIER_THRESHOLDS[nextTier] - TIER_THRESHOLDS[currentTier])) * 100
    : 100

  const handleRedeemReward = (rewardId: number) => {
    setSelectedReward(rewardId)
    const reward = REWARDS.find((r) => r.id === rewardId)

    if (reward && user.points >= reward.points) {
      toast({
        title: "Reward Redeemed!",
        description: `You've successfully redeemed ${reward.name}`,
      })
    } else {
      toast({
        title: "Not Enough Points",
        description: "You need more points to redeem this reward",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Rewards Program</h1>
          <p className="text-muted-foreground">Earn points and unlock rewards for responsible waste management</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Your Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium capitalize">{currentTier} Tier</p>
                <p className="text-sm text-muted-foreground">{user.points} points</p>
              </div>
              {nextTier && (
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Next Tier</p>
                  <p className="text-lg font-medium capitalize">{nextTier}</p>
                </div>
              )}
            </div>

            {nextTier && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground text-center">
                  {pointsToNextTier} points needed for next tier
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              <div className="text-center">
                <div
                  className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${currentTier === "bronze" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Bronze</p>
              </div>
              <div className="text-center">
                <div
                  className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${currentTier === "silver" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Silver</p>
              </div>
              <div className="text-center">
                <div
                  className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${currentTier === "gold" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Gold</p>
              </div>
              <div className="text-center">
                <div
                  className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${currentTier === "platinum" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Platinum</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="rewards">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
            <TabsTrigger value="activities">Earn Points</TabsTrigger>
          </TabsList>

          <TabsContent value="rewards" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {REWARDS.map((reward) => (
                <Card key={reward.id}>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <reward.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                    <CardDescription>{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{reward.points} points</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={user.points >= reward.points ? "default" : "outline"}
                      onClick={() => handleRedeemReward(reward.id)}
                      disabled={user.points < reward.points}
                    >
                      {user.points >= reward.points ? (
                        <>Redeem Reward</>
                      ) : (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Need {reward.points - user.points} more points
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {ACTIVITIES.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{activity.name}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">Earn {activity.points} points</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Start Activity
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your point earning history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Recycling Drop-off</p>
                    <p className="text-sm text-muted-foreground">March 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>+10 points</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Issue Reported</p>
                    <p className="text-sm text-muted-foreground">March 12, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>+5 points</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
