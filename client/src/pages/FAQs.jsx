import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "We recommend visiting your dentist every 6 months for a routine check-up and professional cleaning. However, if you have ongoing dental issues such as gum disease, cavities, or wear dental appliances like braces or dentures, more frequent visits — every 3 to 4 months — may be necessary. Regular visits help us detect problems early before they become costly or painful."
  },
  {
    q: "What is the right way to brush and floss my teeth?",
    a: "You should brush your teeth at least twice a day — once in the morning and once before bed — using a soft-bristled toothbrush and fluoride toothpaste. Hold your brush at a 45-degree angle to your gums and use gentle circular motions. Floss at least once a day to remove plaque and food particles from between your teeth and under the gumline, where your toothbrush cannot reach."
  },
  {
    q: "Are dental X-rays safe?",
    a: "Yes, dental X-rays are very safe. The amount of radiation exposure from modern digital dental X-rays is extremely small — far less than what you are exposed to during a normal day from natural background radiation. We also use protective lead aprons to further minimize exposure. X-rays are an essential diagnostic tool that help us detect hidden cavities, bone loss, and other issues not visible to the naked eye."
  },
  {
    q: "What causes tooth sensitivity, and how can it be treated?",
    a: "Tooth sensitivity is usually caused by exposed dentin — the inner layer of your tooth — due to worn enamel, receding gums, cracked teeth, or cavities. You may feel sharp pain when eating or drinking something hot, cold, sweet, or acidic. Treatment options include desensitizing toothpaste, fluoride gel, dental bonding, a gum graft, or a root canal if the nerve is involved. We will assess the cause and recommend the best solution for you."
  },
  {
    q: "What is a dental implant and am I a good candidate?",
    a: "A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root, onto which a crown is attached. They look, feel, and function like natural teeth. Good candidates are adults with healthy gums and sufficient jawbone density, non-smokers, and those without uncontrolled chronic conditions like diabetes. We perform a thorough evaluation including X-rays or 3D scans to determine your suitability."
  },
  {
    q: "How can I whiten my teeth safely?",
    a: "Professional teeth whitening done at our clinic is the safest and most effective option. We use clinically approved bleaching agents that can lighten teeth by several shades in a single session. Over-the-counter products can also help but are less concentrated and take longer. We advise against using unregulated home remedies like activated charcoal or lemon juice, as they can damage your enamel. We will guide you on which method suits your teeth best."
  },
  {
    q: "What should I do in a dental emergency?",
    a: "If you have a knocked-out tooth, handle it by the crown, rinse it gently, and try to reinsert it. If that is not possible, store it in milk or between your cheek and gum and come to us immediately. For a broken tooth, rinse with warm water and apply a cold compress to reduce swelling. For severe toothache, rinse with warm salt water and avoid placing aspirin on the tooth. Call our clinic right away — we keep emergency slots open for urgent cases."
  },
  {
    q: "Is teeth whitening suitable for everyone?",
    a: "Teeth whitening works best on natural tooth enamel and is not effective on crowns, veneers, fillings, or bonding. It is also not recommended for pregnant or nursing women, children under 16, or people with gum disease, tooth decay, or extremely sensitive teeth. We always assess your oral health before recommending whitening treatment to ensure it is safe and will give you the results you are expecting."
  },
  {
    q: "What is gum disease and how is it treated?",
    a: "Gum disease (periodontal disease) is an infection of the tissues surrounding and supporting your teeth. It begins as gingivitis — red, swollen, bleeding gums — and can progress to periodontitis, where the gums pull away from the teeth and bone is lost. Treatment depends on severity and can range from a professional deep cleaning (scaling and root planing) to surgical procedures. Good home care and regular check-ups are key to preventing and managing it."
  },
  {
    q: "How do I take care of my child's teeth?",
    a: "Start cleaning your baby's gums with a soft damp cloth even before the first tooth appears. Once teeth come in, use a small, soft toothbrush with a tiny smear of fluoride toothpaste. From age 3, use a pea-sized amount. Encourage brushing twice a day and flossing as soon as teeth touch. Limit sugary snacks and drinks, and bring your child for their first dental visit by their first birthday or when the first tooth appears. Early habits make a lifetime of difference."
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={`rounded-2xl border transition-all duration-300 ${open ? 'border-[#1784B4] bg-white shadow-[0_8px_30px_rgba(23,132,180,0.1)]' : 'border-gray-100 bg-white shadow-sm hover:shadow-md'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <span className={`text-[17px] font-bold leading-snug transition-colors ${open ? 'text-[#1784B4]' : 'text-[#0A2B42]'}`}>
          {faq.q}
        </span>
        <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#1784B4] text-white rotate-0' : 'bg-[#F2F8FB] text-[#1784B4]'}`}>
          {open ? <FiMinus className="text-base stroke-[2.5]" /> : <FiPlus className="text-base stroke-[2.5]" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-6 text-gray-500 text-[15px] leading-relaxed font-medium border-t border-gray-100 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-[#F2F8FB] min-h-screen">

      {/* ── Page Header ─────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1784B4]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <FiPlus className="text-[#1784B4] text-lg" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">FAQ</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] sm:text-[52px] font-extrabold text-[#0A2B42] tracking-tight mb-4 leading-tight"
          >
            Frequently Asked <span className="text-[#1784B4]">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-[16px] max-w-2xl mx-auto leading-relaxed"
          >
            Got questions about your dental health? We have answered the most common ones below. Still have doubts? We are just a call away.
          </motion.p>
        </div>
      </div>

      {/* ── FAQ Accordion ────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center bg-[#0A2B42] rounded-[28px] p-10 shadow-xl"
          >
            <h3 className="text-white text-[26px] font-extrabold mb-3 tracking-tight">
              Still Have Questions?
            </h3>
            <p className="text-[#cae8f5] font-medium text-[15px] mb-7 max-w-md mx-auto leading-relaxed">
              Our dental team is happy to answer any questions you have. Schedule a consultation or simply give us a call.
            </p>
            <Link
              to="/book-appointment"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#1784B4] text-white pl-8 pr-2 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg text-[15px]"
            >
              <div className="absolute top-0 left-0 h-full w-full bg-white/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
              <span className="relative z-10 tracking-wide">Book a Consultation</span>
              <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-500">
                <FiArrowUpRight className="text-lg stroke-[3]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default FAQs;
