"use client"

import Image from "next/image"
import Footer from "@/components/ui/Footer"
import { Linkedin, Instagram } from "lucide-react"

type TeamMember = {
  name: string
  position: string
  image: string
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 bg-white rounded-sm mb-4 overflow-hidden">
      <Image
        src={member.image}
        alt={member.name}
        width={160}
        height={160}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="text-center">
      <h3 className="font-roboto text-white text-lg">{member.name}</h3>
      <p className="font-roboto text-gray-400 text-sm">{member.position}</p>

      <div className="flex gap-3 justify-center mt-2">
        <a href="#" className="text-white hover:text-gray-400 transition">
          <Instagram size={18} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </div>
)

const TeamSection = ({
  title,
  members,
}: {
  title: string
  members: TeamMember[]
}) => (
  <section className="w-full py-20 px-6 flex flex-col items-center">
    <h2 className="font-joker text-white text-3xl border border-gray-500 px-6 py-3 mb-14 text-center">
      {title}
    </h2>

    {/* 🔥 FIX: single member gets flex centering */}
    {members.length === 1 ? (
      <div className="flex justify-center w-full">
        <TeamMemberCard member={members[0]} />
      </div>
    ) : (
      <div
        className="
          grid gap-14 w-full max-w-6xl
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          place-items-center
        "
      >
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} member={member} />
        ))}
      </div>
    )}
  </section>
)

export default function TeamsPage() {
  const img = "/images_teams/Team.png"

  const designTeam: TeamMember[] = [
    { name: "Priyanshi Didi", position: "Design Lead", image: img },
  ]

  const webTeam: TeamMember[] = [
    { name: "ABC", position: "Frontend Dev", image: img },
    { name: "Aditya Vaish", position: "Backend Dev", image: img },
    { name: "Siddh Shah", position: "Full Stack Dev", image: img },
    { name: "Rishabh Sharma", position: "Full Stack Dev", image: img },
  ]

  const socialTeam: TeamMember[] = [
    { name: "Alex Chen", position: "Social Manager", image: img },
    { name: "Emma Wilson", position: "Content Creator", image: img },
    { name: "David Brown", position: "Video Editor", image: img },
    { name: "Sophia Lee", position: "Graphic Designer", image: img },
  ]

  return (
    <main className="w-full bg-black min-h-screen">
      <section className="relative w-full h-[85vh] min-h-[600px] -mt-20">
        <Image
          src="/images_teams/teams_header_img.png"
          alt="Teams Image"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-joker text-white text-5xl md:text-7xl lg:text-9xl tracking-wider">
            team
          </h1>
        </div>
      </section>

      <TeamSection title="design team" members={designTeam} />
      <TeamSection title="web development team" members={webTeam} />
      <TeamSection title="social media team" members={socialTeam} />
      <TeamSection title="honorable mentions" members={socialTeam} />

      <div className="h-24" />
      <Footer />
    </main>
  )
}
