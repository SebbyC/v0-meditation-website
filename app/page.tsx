import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Heart, Moon, Clock } from "lucide-react"
import Image from "next/image"
import { MeditationTimer } from "@/components/meditation-timer"
import { AudioPlayer } from "@/components/audio-player"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Inner Peace
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl dark:text-slate-400">
                  Begin your journey to mindfulness with guided meditations, calming sounds, and expert techniques for
                  daily practice.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/meditations">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Start Meditating
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Meditation"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-900">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need for Your Practice</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Discover tools and resources designed to enhance your meditation journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="border-2 border-teal-100 dark:border-teal-900">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900">
                  <Clock className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">Meditation Timer</h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  Customize your meditation sessions with our flexible timer
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-teal-100 dark:border-teal-900">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900">
                  <Moon className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">Guided Sessions</h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  Follow along with expert-led meditation sessions for all levels
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-teal-100 dark:border-teal-900">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900">
                  <Heart className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">Mindfulness Resources</h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  Articles and guides to deepen your understanding of mindfulness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meditation Timer Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meditation Timer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Set your desired meditation duration and begin your practice
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg py-12">
            <MeditationTimer />
          </div>
        </div>
      </section>

      {/* Guided Meditations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Guided Meditations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Listen to our collection of guided meditation sessions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Beginner's Meditation</h3>
                  <p className="text-muted-foreground dark:text-slate-400">
                    A gentle introduction to meditation practice - 5 minutes
                  </p>
                  <AudioPlayer title="Beginner's Meditation" duration="5:00" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Stress Relief</h3>
                  <p className="text-muted-foreground dark:text-slate-400">
                    Release tension and find calm - 10 minutes
                  </p>
                  <AudioPlayer title="Stress Relief" duration="10:00" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Deep Relaxation</h3>
                  <p className="text-muted-foreground dark:text-slate-400">Journey into deep relaxation - 15 minutes</p>
                  <AudioPlayer title="Deep Relaxation" duration="15:00" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mindful Breathing</h3>
                  <p className="text-muted-foreground dark:text-slate-400">
                    Focus on your breath to center yourself - 8 minutes
                  </p>
                  <AudioPlayer title="Mindful Breathing" duration="8:00" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Community Says</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Hear from people who have transformed their lives through meditation
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-muted-foreground dark:text-slate-400">
                    "This meditation app has completely changed my daily routine. I feel more centered and calm
                    throughout the day."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-200 w-10 h-10"></div>
                    <div>
                      <p className="font-medium">Sarah K.</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">Practicing for 6 months</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-muted-foreground dark:text-slate-400">
                    "The guided meditations are perfect for beginners like me. I've noticed a significant reduction in
                    my anxiety levels."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-200 w-10 h-10"></div>
                    <div>
                      <p className="font-medium">Michael T.</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">Practicing for 3 months</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-muted-foreground dark:text-slate-400">
                    "I love the timer feature. It's simple but effective, and helps me stay consistent with my
                    practice."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-200 w-10 h-10"></div>
                    <div>
                      <p className="font-medium">Priya R.</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">Practicing for 1 year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Begin Your Meditation Journey Today</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Join our community and transform your life through mindfulness
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/meditations">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Start Your Practice
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
