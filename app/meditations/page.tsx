import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AudioPlayer } from "@/components/audio-player"
import Link from "next/link"
import Image from "next/image"

export default function MeditationsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meditation Library</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
          Explore our collection of guided meditations for every experience level and need
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Introduction to Meditation"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Introduction to Meditation</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      A gentle introduction to basic meditation techniques - 5 minutes
                    </p>
                    <AudioPlayer title="Introduction to Meditation" duration="5:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Breath Awareness"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Breath Awareness</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Learn to focus on your breath - 8 minutes
                    </p>
                    <AudioPlayer title="Breath Awareness" duration="8:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Body Scan for Beginners"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Body Scan for Beginners</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      A simple body awareness practice - 10 minutes
                    </p>
                    <AudioPlayer title="Body Scan for Beginners" duration="10:00" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Loving-Kindness Meditation"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Loving-Kindness Meditation</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Cultivate compassion for yourself and others - 15 minutes
                    </p>
                    <AudioPlayer title="Loving-Kindness Meditation" duration="15:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Mindful Walking"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Mindful Walking</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Practice mindfulness while walking - 12 minutes
                    </p>
                    <AudioPlayer title="Mindful Walking" duration="12:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Stress Reduction"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Stress Reduction</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Release tension and find calm - 18 minutes
                    </p>
                    <AudioPlayer title="Stress Reduction" duration="18:00" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Vipassana Meditation"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Vipassana Meditation</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Insight meditation practice - 25 minutes
                    </p>
                    <AudioPlayer title="Vipassana Meditation" duration="25:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Deep Concentration"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Deep Concentration</h3>
                    <p className="text-muted-foreground dark:text-slate-400">Develop focused attention - 30 minutes</p>
                    <AudioPlayer title="Deep Concentration" duration="30:00" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      fill
                      alt="Non-Dual Awareness"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Non-Dual Awareness</h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Explore the nature of consciousness - 20 minutes
                    </p>
                    <AudioPlayer title="Non-Dual Awareness" duration="20:00" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-900 mb-4">
          New to meditation?
        </div>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Not sure where to start?</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400 mb-6">
          Our beginner's guide will help you establish a consistent meditation practice
        </p>
        <Link href="/about">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            Read Our Beginner's Guide
          </Button>
        </Link>
      </div>
    </div>
  )
}
