import logo from "@/assets/navBar-Images/logo.png";
import img1 from "../../assets/socialmedia/fbicon.png";
import img2 from "../../assets/socialmedia/insta.png";
import img3 from "../../assets/socialmedia/linkedin.png";
import img4 from "../../assets/socialmedia/whatsapp.png";
import img5 from "../../assets/socialmedia/xicon.png";
import mastercard from "../../assets/paymentcards/mastercard.png";
import amex from "../../assets/paymentcards/amex.jpg";
import paypalcard from "../../assets/paymentcards/paypalcard.png";
import visacard from "../../assets/paymentcards/visacard.png";
import { motion } from "framer-motion";

export function Footer() {
  const socailIcons = [
    { src: img1, link: "/" },
    { src: img2, link: "/" },
    { src: img3, link: "/" },
    { src: img4, link: "/" },
    { src: img5, link: "/" },
  ];
  return (
    <footer className="bg-ink text-bone/70 border-t border-bone/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Left - Logo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="MYNEK" className="h-10" />
              <span className="text-4xl text-[#454545] font-bold tracking-widest">
                MYNEK
              </span>
            </div>
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            className="text-[10px] mb-4 leading-5"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              STORY-DRIVEN <br />
              HEAVYWEIGHT <br />
              STREETWEAR <br />
              DROP 01 • THREE WORLD <br />
              NO RESTOCKS
            </motion.p>

            <motion.button
              className="mt-4 bg-bone text-ink text-xs px-4 py-2 font-semibold tracking-widest hover:bg-bone/90 transition"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Streetlist
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Top Divider */}
        <div className="border-t border-bone/10 my-8" />

        {/* Links Section */}
        <div className="flex flex-wrap justify-between md:justify-start gap-x-12 gap-y-6 text-[12px] tracking-widest mb-10">
          <div className="flex flex-col gap-3 min-w-[120px]">
            <a href="#">DROP 01</a>
            <a href="#about">ABOUT</a>
          </div>

          <div className="flex flex-col gap-3 min-w-[120px]">
            <a href="#">UNIVERSE</a>
            <a href="#faqs">FAQ</a>
          </div>

          <div className="flex flex-col gap-3 min-w-[120px]">
            <a href="#">LOOKBOOK</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>

        {/* Payment + Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Payment Icons */}
          <div className="flex items-center gap-6">
            <img src={visacard} alt="Visa" className="h-6 opacity-90" />
            <img src={mastercard} alt="Mastercard" className="h-6 opacity-90" />
            <img src={amex} alt="American Express" className="h-6 opacity-90" />
            <img src={paypalcard} alt="PayPal" className="h-6 opacity-90" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socailIcons.map((img, index) => (
              <a
                key={index}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img.src}
                  alt={`social icon ${index + 1}`}
                  className="w-[22px] h-[22px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-bone/10 my-4" />

        {/* Copyright */}
        <p className="text-bone/50 text-center text-[11px] tracking-wide">
          ©2026 MYNEK. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
