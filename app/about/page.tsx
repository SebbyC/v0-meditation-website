import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Meditation Haven</h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
            Founded in 2023, Meditation Haven was created with a simple mission: to make meditation accessible to
            everyone.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
            Our team of experienced meditation teachers and mindfulness experts have designed our platform to support
            both beginners and experienced practitioners on their journey to inner peace.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
            We believe that regular meditation practice can transform lives, reduce stress, and increase overall
            wellbeing. Our goal is to provide the tools and resources you need to establish and maintain a consistent
            practice.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Contact Us
              </Button>
            </Link>
            <Link href="/meditations">
              <Button variant="outline" size="lg">
                Explore Meditations
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/placeholder.svg?height=600&width=600"
          width={600}
          height={600}
          alt="Team meditation"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
        />
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Philosophy</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p className="text-muted-foreground dark:text-slate-400">
              We believe meditation should be available to everyone, regardless of experience level or background.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Consistency</h3>
            <p className="text-muted-foreground dark:text-slate-400">
              Regular practice is key to experiencing the benefits of meditation. We provide tools to help you maintain
              consistency.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-muted-foreground dark:text-slate-400">
              Meditation is enhanced when practiced in community. We foster a supportive environment for practitioners.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
