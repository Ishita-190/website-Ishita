import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

import img1 from "/amhacks1.jpeg";
import img2 from "/amhacks2.jpeg";
import img3 from "/amhacks3.jpeg";
import img4 from "/amhacks4.jpg";
import img5 from "/amhacks5.jpg";
import heroBg from "/amhacks.jpeg";


const AMHacks = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-06T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const galleryImages = [img1, img2, img3, heroBg, img4, img5];

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative text-white min-h-screen font-sans overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-[1]"></div>

        <div className="relative z-[2] min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <motion.div
              className="text-center max-w-6xl mx-auto"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={childVariants}>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500">
                    AM HACKS
                  </span>
                </h1>
                <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-8"></div>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                variants={childVariants}
              >
                Where Innovation Meets Excellence. Join the ultimate hackathon
                experience and build the future with cutting-edge technology.
              </motion.p>

              {/* Stats */}
              {/* <motion.div
                className="flex flex-wrap justify-center gap-6 mb-12"
                variants={childVariants}
              >
                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Calendar className="text-yellow-400" size={20} />
                  <span className="text-slate-300">6-8 Feb 2026</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Clock className="text-yellow-400" size={20} />
                  <span className="text-slate-300">24 Hours</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <MapPin className="text-yellow-400" size={20} />
                  <span className="text-slate-300">Delhi (Venue TBA)</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Users className="text-yellow-400" size={20} />
                  <span className="text-slate-300">2.5k+ Participants</span>
                </div>
              </motion.div> */}

              {/* Countdown */}
              {/*}
              <motion.div className="mb-12" variants={childVariants}>
                <h3 className="text-2xl font-bold text-slate-300 mb-6">
                  Event Starts In
                </h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                      key={unit}
                      className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-4 min-w-[80px]"
                    >
                      <div className="text-3xl font-bold text-yellow-400">
                        {value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-16"
                variants={childVariants}
              >
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>

                <motion.button
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PREVIOUS SPONSORS */}
      <div className="w-full bg-black py-20 overflow-hidden">
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .scroller-inner {
            animation: scroll 80s linear infinite;
          }
        `}</style>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.h2 
            variants={childVariants}
            className="text-4xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Previous Sponsors
          </motion.h2>
        </motion.div>
        
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden 
                     [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll scroller-inner group hover:[animation-play-state:paused]">
            {(() => {
              const sponsors = [
                { name: 'Aptos', logo: 'https://cryptologos.cc/logos/aptos-apt-logo.svg' },
                { name: 'Algorand', logo: 'https://cryptologos.cc/logos/algorand-algo-logo.svg' },
                { name: 'AoPS', logo: 'https://artofproblemsolving.com/assets/images/aops-logo.png' },
                { name: 'Beeceptor', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fbeeceptor.com%2F' },
                { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg' },
                { name: 'Coding Blocks', logo: 'https://media.licdn.com/dms/image/v2/C560BAQF5th2_4vAFkA/company-logo_200_200/company-logo_200_200/0/1630626661031/codingblocksindia_logo?e=2147483647&v=beta&t=B5ts0hZFiRmgEXYqUZ6BHueCK8YMEiA3KgOy-ghcKPc' },
                { name: 'Devfolio', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-devfolio-icon-svg-download-png-8383724.png' },
                { name: 'Filecoin', logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.svg' },
                { name: 'fleek', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Ffleek.xyz%2F' },
                { name: 'GUVI', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fwww.guvi.in%2F' },
                { name: 'KRNL', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fkrnltech.com%2F' },
                { name: 'MEXC', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fwww.mexc.co%2F' },
                { name: 'MLH', logo: 'https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg' },
                { name: 'polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg' },
                { name: 'PW', logo: 'https://www.google.com/s2/favicons?sz=128&domain_url=https%3A%2F%2Fwww.pw.live%2F' },
                { name: 'Quick Heal', logo: 'https://cdn.brandfetch.io/idNBiLEMXo/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B' },
                { name: 'Rajdhani', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Frajdhanigroup.com%2F' },
                { name: 'Reskill', logo: 'https://www.reskilll.com/reskillllogo.png' },
                { name: 'Rise in', logo: 'https://files.risein.com/bootcamps/from-code-to-chain-stellar-workshop/vimtv-cohorts-coverpng' },
                { name: 'STARKNET', logo: 'https://www.starknet.io/favicon.ico' },
                { name: 'Stellar', logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.svg' },
                { name: 'tezos', logo: 'https://cryptologos.cc/logos/tezos-xtz-logo.svg' },
                { name: 'The Graph India', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0p489sFlss7HSIKcPQOQoC0FdzyQ7AsGVg&s' },
                { name: 'YHills', logo: 'https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fyhills.com%2F' }
              ];
              const duplicatedSponsors = [...sponsors, ...sponsors];
              
              return duplicatedSponsors.map((sponsor, index) => (
                <li key={index} className="flex-shrink-0">
                  <div 
                    className="w-48 h-32 flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10
                               transition-all duration-300 group-hover:bg-white/10"
                  >
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className={`max-w-full object-contain ${sponsor.name === 'Reskill' ? 'max-h-10 mt-2 mb-2' : 'max-h-16 mb-2'}`}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-black font-bold text-xs">{sponsor.name.slice(0,3).toUpperCase()}</span>
                      </div>
                    )}
                    <div className="text-[oklch(87.2%_0.01_258.338)] text-center text-xs font-medium">{sponsor.name}</div>
                  </div>
                </li>
              ));
            })()}
          </ul>
        </div>
      </div>

      {/* GALLERY */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          EVENTS GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur-sm"
            >
              <img
                src={src}
                alt=""
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AMHacks;
