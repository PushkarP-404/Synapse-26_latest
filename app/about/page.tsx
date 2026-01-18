"use client";

import NavigationPanel from "@/components/ui/NavigationPanel";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Resizable-navbar";

export default function About() {
  return (
    <>
      <Navbar visible={true}>
        <NavigationPanel />
      </Navbar>

      {/* MAIN AREA */}
      <main className="relative w-screen bg-black text-white overflow-x-hidden">
        
        {/* MOBILE BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 md:hidden bg-center bg-cover"
          style={{ backgroundImage: "url('/about-art.png')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* CONTENT */}
        <section className="relative z-10 flex flex-col md:flex-row">
          
          {/* LEFT ART – DESKTOP ONLY */}
          <div className="w-full md:w-[30%] hidden md:flex items-end p-10 justify-center md:justify-start">
            <img
              src="/about-art.png"
              alt="Decorative cards"
              className="h-[90%]"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full lg:w-[70%] flex flex-col justify-center items-start px-6 py-20 md:px-12 lg:py-24 lg:pr-[120px]">
            
            {/* HEADING */}
            <h1 className="font-joker font-normal text-5xl md:text-8xl xl:text-[140px] leading-none mb-8 w-full text-center lg:text-right">
              about us
            </h1>

            {/* TEXT */}
            <div className="font-jqka text-left w-full">
              <div className="space-y-6 text-[#e5e5e5] text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[39px] tracking-wide">
                <p>
                  Step into the twisted wonderland of Synapse’26, Gujarat’s most 
                  electrifying and unforgettable annual cultural festival! Curated 
                  by the bold and brilliant Synapse Committee, this four-day 
                  spectacle is where chaos meets creativity and rules are meant 
                  to be bent.
                </p>

                <p>
                  From [dates], Synapse’26 unveils The Joker’s Realm — a world where 
                  laughter hides secrets, madness fuels art, and unpredictability is 
                  the only constant. Expect three explosive concert nights with artists 
                  who’ll shake your reality, a riotous stand-up comedy night, and 25+ 
                  high-energy events designed to test your talent, nerve, and wit.
                </p>

                <p>
                  This isn’t just a fest — it’s a game of minds and moments. From 
                  jaw-dropping performances and immersive experiences to thrilling 
                  competitions and surprise twists at every turn, The Joker’s Realm 
                  invites you to embrace the beautiful chaos.
                </p>

                <p>
                  Whether you’re a performer craving the spotlight, a strategist chasing 
                  victory, or a free spirit seeking unforgettable vibes — Synapse’26 is
                   your wild card.
                </p>

                <p>
                  So shuffle the deck, take your chance, and step into the realm where 
                  nothing is predictable and everything is legendary.  
                </p>

                <p className="text-white mt-8 font-medium">
                  Dare to play. Dare to stay. Welcome to Synapse’26. 🔥
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
