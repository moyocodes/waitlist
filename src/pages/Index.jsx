"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Star, ShoppingBag, Heart, Search, Menu, X, ArrowRight, Check, Mail, CheckCircle } from "lucide-react"

const LuxuryJewelryLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showEnvelopeAnimation, setShowEnvelopeAnimation] = useState(false)
  const [siteRevealed, setSiteRevealed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All")
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)

      setTimeout(() => {
        setShowEnvelopeAnimation(true)

        // Reveal site after dramatic animation
        setTimeout(() => {
          setSiteRevealed(true)
          setTimeout(() => {
            setShowModal(false)
          }, 500)
        }, 1000) // Reduced from 3000ms to 1000ms
      }, 500) // Reduced from 1000ms to 500ms
    }, 800) // Reduced from 1500ms to 800ms
  }

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    // Simulate newsletter subscription
    setTimeout(() => {
      setSubscribed(true)
    }, 1000)
  }

  const featuredProducts = [
    {
      id: 1,
      name: "Eternal Solitaire Diamond Ring",
      price: "$18,500",
      originalPrice: "$22,000",
      image: "https://i.pinimg.com/736x/53/a5/f0/53a5f0fee251aaa04a1e8ca5271c1ecf.jpg",
      category: "Rings",
      isNew: true,
    },
    {
      id: 2,
      name: "Vintage Pearl & Gold Necklace",
      price: "$12,750",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
      category: "Necklaces",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Rose Gold Crystal Earrings",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      category: "Earrings",
    },
    {
      id: 4,
      name: "Classic Tennis Bracelet",
      price: "$8,950",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      category: "Bracelets",
    },
  ]

  const collections = [
    {
      name: "Signature Collection",
      subtitle: "Timeless Elegance",
      image: "https://i.pinimg.com/736x/53/a5/f0/53a5f0fee251aaa04a1e8ca5271c1ecf.jpg",
      description: "Handcrafted masterpieces that define luxury",
    },
    {
      name: "Modern Heritage",
      subtitle: "Contemporary Classics",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=800&fit=crop",
      description: "Where tradition meets innovation",
    },
  ]

  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"]

  const filteredProducts =
    activeCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeCategory)

  // Background images that change on scroll
  const backgroundImages = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1920&h=1080&fit=crop",
    "https://i.pinimg.com/736x/53/a5/f0/53a5f0fee251aaa04a1e8ca5271c1ecf.jpg",
  ]

  const currentBgIndex = Math.floor(scrollY / 800) % backgroundImages.length

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md mx-4"
            >
              {!showEnvelopeAnimation ? (
                <motion.div
                  className="bg-white/20 backdrop-blur-2xl rounded-2xl p-8 text-center border border-white/30 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <motion.div
                    className="mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='serif' fontSize='48' fontWeight='300' fill='%23000'%3EYagso%3C/text%3E%3C/svg%3E"
                      alt="Yagso"
                      className="h-16 mx-auto mb-4"
                    />
                  </motion.div>

                  <motion.h2
                    className="text-3xl font-thin text-gray-900 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Welcome to <span className="text-amber-600">Yagso</span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 font-light mb-8 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Discover our exclusive collection of handcrafted luxury jewelry. Be the first to know about new
                    arrivals and special offers.
                  </motion.p>

                  {!isSubmitted ? (
                    <motion.form
                      onSubmit={handleEmailSubmit}
                      className="space-y-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 font-light text-center transition-colors bg-white/80 backdrop-blur"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 text-white py-4 rounded-lg font-light tracking-wider hover:bg-gray-800 transition-all duration-300 disabled:opacity-70"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <motion.div
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                            <span>SUBSCRIBING...</span>
                          </div>
                        ) : (
                          "UNLOCK EXCLUSIVE ACCESS"
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="space-y-6"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 20 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 15, delay: 0.2 }}
                      >
                        <Check className="w-8 h-8 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-light text-gray-900">Thank You!</h3>
                      <p className="text-gray-600 font-light">Welcome to the Yagso family. Prepare to be amazed...</p>
                    </motion.div>
                  )}

                  <p className="text-xs text-gray-400 mt-6 font-light">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center justify-center h-64"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      rotate: [-180, 0, 0],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      times: [0, 0.6, 1],
                    }}
                  >
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 backdrop-blur-xl border border-amber-300/50 flex items-center justify-center shadow-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(245, 158, 11, 0.4)",
                          "0 0 0 20px rgba(245, 158, 11, 0)",
                          "0 0 0 0 rgba(245, 158, 11, 0)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='serif' fontSize='32' fontWeight='300' fill='%23d97706'%3EYagso%3C/text%3E%3C/svg%3E"
                        alt="Yagso"
                        className="h-12"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>

                    {/* Dramatic particles effect */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                        animate={{
                          x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
                          y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Modal */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" onClick={() => setShowNewsletter(false)} />
            <motion.div
              className="relative bg-white/15 backdrop-blur-2xl border border-white/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <button
                onClick={() => setShowNewsletter(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {!subscribed ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Mail className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">Get exclusive access to new collections and special offers.</p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/50 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 150 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-light text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Welcome to Yagso!
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    Thank you for subscribing. Get ready for exclusive jewelry collections!
                  </motion.p>
                  <motion.button
                    onClick={() => {
                      setShowNewsletter(false)
                      setSiteRevealed(true)
                    }}
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Collection
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: siteRevealed ? 1 : 0,
          scale: siteRevealed ? 1 : 0.95,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: siteRevealed ? 0.5 : 0, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='serif' fontSize='48' fontWeight='300' fill='%23000'%3EYagso%3C/text%3E%3C/svg%3E"
                  alt="Yagso"
                  className="h-8"
                />
              </motion.div>

              <div className="hidden md:flex items-center space-x-12">
                {["Collections", "Heritage", "Atelier", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-light tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: siteRevealed ? 0.7 + index * 0.1 : 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center space-x-6">
                {[Search, Heart].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: siteRevealed ? 1 + index * 0.1 : 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5 cursor-pointer text-gray-600 hover:text-amber-600 transition-colors" />
                  </motion.div>
                ))}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: siteRevealed ? 1.2 : 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ShoppingBag className="w-5 h-5 cursor-pointer text-gray-600 hover:text-amber-600 transition-colors" />
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="text-xs text-white font-medium">2</span>
                  </motion.div>
                </motion.div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-light"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {["Collections", "Heritage", "Atelier", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              >
                <source
                  src="https://v1.pinimg.com/videos/mc/720p/05/05/3d/05053d9aa15c5af43280e814a99c5884.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designed%20for%20any%20occasion%F0%9F%A4%8DSHOP-%20%E1%B4%A1%E1%B4%A1%E1%B4%A1.%E1%B4%85%C9%AA%E1%B4%80%E1%B4%8D%E1%B4%8F%C9%B4%E1%B4%85%E1%B4%8D%E1%B4%8F%E1%B4%85%E1%B4%87.%E1%B4%85%E1%B4%87%20..%20.%20Alle%20wasser-%20%26%20duschfesten%20Artikel%20sind-e7C7vnefR9eLoJ8uhzHm86dXzYWKm7.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60" />
          </div>

          <motion.div className="relative z-20 text-center max-w-4xl mx-auto px-6" style={{ y, opacity }}>
            <motion.div
              className="absolute -top-32 -left-32 w-64 h-64"
              animate={{
                rotateY: 360,
                rotateX: [0, 20, 0],
                rotateZ: [0, 10, 0],
                z: [0, 100, 0],
                y: [-50, 50, -50],
                x: [0, 30, 0],
              }}
              transition={{
                rotateY: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                rotateX: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                rotateZ: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                z: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                x: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              className="absolute top-10 right-20 w-12 h-12"
              animate={{
                y: [0, -200, -100, 0],
                x: [0, -50, 50, 0],
                rotate: [0, 180, 360, 720],
                scale: [1, 0.5, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full shadow-lg opacity-80" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 w-8 h-16"
              animate={{
                y: [0, -150, -50, 0],
                x: [0, 100, -30, 0],
                rotate: [0, -90, 180, 0],
                scaleY: [1, 1.5, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-amber-600 to-yellow-400 rounded-full shadow-xl opacity-70" />
            </motion.div>

            {/* Floating jewelry elements */}
            <motion.div
              className="absolute top-20 right-10 w-8 h-8"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-amber-400 rounded-full opacity-30 blur-sm" />
            </motion.div>

            <motion.div
              className="absolute bottom-32 left-16 w-6 h-6"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -180, -360],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-full h-full bg-yellow-500 rounded-full opacity-25 blur-sm" />
            </motion.div>

            <motion.h1
              className="text-8xl md:text-9xl font-thin mb-8 leading-tight"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: siteRevealed ? 1 : 0, y: siteRevealed ? 0 : 100 }}
              transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 50 }}
            >
              <span className="block text-gray-900 mb-2">YAGSO</span>
              <span className="block bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                LUXURY
              </span>
            </motion.h1>

            <motion.div
              className="flex justify-center items-center space-x-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: siteRevealed ? 1 : 0, scale: siteRevealed ? 1 : 0.8 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                className="group bg-gray-900 text-white px-12 py-4 font-light tracking-wider hover:bg-gray-800 transition-all duration-500 flex items-center space-x-3"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source
                    src="https://v1.pinimg.com/videos/mc/720p/05/05/3d/05053d9aa15c5af43280e814a99c5884.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Craftsmanship</h3>
                  <p className="text-sm opacity-90">Every detail perfected</p>
                </div>
              </motion.div>

              {/* Middle Cards */}
              <div className="space-y-8">
                {featuredProducts.slice(0, 2).map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-light text-gray-900 mb-1">{product.name}</h4>
                        <p className="text-amber-600 font-medium">{product.price}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designed%20for%20any%20occasion%F0%9F%A4%8DSHOP-%20%E1%B4%A1%E1%B4%A1%E1%B4%A1.%E1%B4%85%C9%AA%E1%B4%80%E1%B4%8D%E1%B4%8F%C9%B4%E1%B4%85%E1%B4%8D%E1%B4%8F%E1%B4%85%E1%B4%87.%E1%B4%85%E1%B4%87%20..%20.%20Alle%20wasser-%20%26%20duschfesten%20Artikel%20sind-e7C7vnefR9eLoJ8uhzHm86dXzYWKm7.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Heritage</h3>
                  <p className="text-sm opacity-90">Timeless traditions</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Featured Products with Scroll Animations */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://i.pinimg.com/736x/53/a5/f0/53a5f0fee251aaa04a1e8ca5271c1ecf.jpg"
              className="w-full h-full object-cover"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-thin mb-6 text-gray-900">
                CURATED <span className="text-amber-600">SELECTIONS</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
                Each piece is meticulously crafted to perfection, embodying the finest traditions of jewelry making
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 font-light tracking-wider transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -10, rotateY: 2 }}
                  viewport={{ once: true }}
                  style={{
                    transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    {product.isNew && (
                      <motion.div
                        className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 text-xs font-medium tracking-wider rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        NEW
                      </motion.div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white px-3 py-1 text-xs font-medium tracking-wider rounded-full">
                        BESTSELLER
                      </div>
                    )}
                    <div className="aspect-square relative bg-gray-50">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div
                        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex gap-2">
                          <motion.button
                            className="flex-1 bg-white/95 backdrop-blur text-gray-900 py-2 px-4 font-light tracking-wide hover:bg-white transition-colors rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Quick View
                          </motion.button>
                          <motion.button
                            className="bg-amber-600 text-white p-2 hover:bg-amber-700 transition-colors rounded"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <p className="text-amber-600 text-sm font-medium mb-2 tracking-wider uppercase">
                        {product.category}
                      </p>
                      <h3 className="text-lg font-light mb-3 text-gray-900 leading-tight">{product.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-light text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="ml-2 text-xs text-gray-500 font-light">(128)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections with Enhanced Animations */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  className={`${index % 2 === 1 ? "lg:order-first" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {index % 2 === 0 ? (
                    <motion.div
                      className="relative group cursor-pointer"
                      style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    </motion.div>
                  ) : (
                    <motion.div className="space-y-8" style={{ transform: `translateY(${scrollY * 0.06}px)` }}>
                      <div>
                        <span className="text-amber-600 font-medium tracking-wider text-sm uppercase">
                          {collection.subtitle}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-thin text-gray-900 mt-2 mb-6">{collection.name}</h3>
                        <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                          {collection.description}
                        </p>
                        <motion.button
                          className="group inline-flex items-center space-x-3 text-gray-900 border-b-2 border-gray-900 pb-2 hover:text-amber-600 hover:border-amber-600 transition-colors duration-300"
                          whileHover={{ x: 10 }}
                        >
                          <span className="font-light tracking-wide">Discover More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                  {index % 2 === 1 && (
                    <motion.div
                      className="relative group cursor-pointer"
                      style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                      whileHover={{ scale: 1.02, rotateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    </motion.div>
                  )}
                  {index % 2 === 0 && (
                    <motion.div className="space-y-8" style={{ transform: `translateY(${scrollY * 0.06}px)` }}>
                      <div>
                        <span className="text-amber-600 font-medium tracking-wider text-sm uppercase">
                          {collection.subtitle}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-thin text-gray-900 mt-2 mb-6">{collection.name}</h3>
                        <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                          {collection.description}
                        </p>
                        <motion.button
                          className="group inline-flex items-center space-x-3 text-gray-900 border-b-2 border-gray-900 pb-2 hover:text-amber-600 hover:border-amber-600 transition-colors duration-300"
                          whileHover={{ x: 10 }}
                        >
                          <span className="font-light tracking-wide">Discover More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section with Parallax */}
        <motion.section
          className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://i.pinimg.com/736x/53/a5/f0/53a5f0fee251aaa04a1e8ca5271c1ecf.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-thin mb-8 text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                HERITAGE OF <span className="text-amber-600">EXCELLENCE</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 font-light leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                For over five decades, our master craftsmen have been creating extraordinary jewelry pieces that
                transcend time.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {[
                  { number: "50+", label: "Years of Excellence" },
                  { number: "10k+", label: "Happy Clients" },
                  { number: "100%", label: "Handcrafted" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-5xl font-thin text-amber-600 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-700 font-light tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="bg-gray-900 text-white px-10 py-4 font-light tracking-wider hover:bg-gray-800 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                OUR STORY
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='serif' fontSize='48' fontWeight='300' fill='white'%3EYagso%3C/text%3E%3C/svg%3E"
                  alt="Yagso"
                  className="h-12 mb-6"
                />
                <p className="text-gray-400 font-light leading-relaxed">
                  Exceptional jewelry crafted with passion, precision, and an unwavering commitment to excellence.
                </p>
              </motion.div>
              {[
                {
                  title: "COLLECTIONS",
                  links: ["Engagement Rings", "Wedding Bands", "Fine Necklaces", "Diamond Earrings"],
                },
                {
                  title: "SERVICES",
                  links: ["Custom Design", "Jewelry Care", "Sizing Guide", "Lifetime Warranty"],
                },
                {
                  title: "CONTACT",
                  links: ["+1 (555) 123-4567", "hello@yagso.com", "123 Fifth Avenue", "New York, NY 10003"],
                },
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-6 tracking-wider">{section.title}</h4>
                  <ul className="space-y-3 text-gray-400 font-light">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex} whileHover={{ x: 5, color: "#f59e0b" }} transition={{ duration: 0.2 }}>
                        <a href="#" className="hover:text-amber-500 transition-colors">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 font-light">&copy; 2024 Yagso Jewelry. All rights reserved.</p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors font-light"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors font-light"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </motion.div>
          </div>
        </footer>
      </motion.div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.9) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes envelope-open {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(-180deg) scale(1.5); }
        }
        
        @keyframes count {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-modal-appear {
          animation: modal-appear 0.5s ease-out forwards;
        }
        
        .animate-count {
          animation: count 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .envelope-animation {
          perspective: 1000px;
        }
        
        .envelope {
          position: relative;
          width: 120px;
          height: 80px;
          margin: 0 auto;
          transform-style: preserve-3d;
        }
        
        .envelope-body {
          width: 120px;
          height: 80px;
          background: rgba(243, 244, 246, 0.3);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(217, 119, 6, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          position: relative;
          z-index: 1;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .envelope-flap {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 124px;
          height: 40px;
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.8), rgba(245, 158, 11, 0.6));
          backdrop-filter: blur(10px);
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          transform-origin: top center;
          z-index: 2;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Floating animation for jewelry pieces */
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        /* Scroll-triggered animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Shimmer effect for premium elements */
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.8s ease;
        }
        
        .shimmer:hover::before {
          left: 100%;
        }
        
        /* Luxury gradient backgrounds */
        .luxury-gradient {
          background: linear-gradient(
            135deg,
            #fef3c7 0%,
            #fde68a 25%,
            #f59e0b 50%,
            #d97706 75%,
            #92400e 100%
          );
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #d97706, #f59e0b);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #92400e, #d97706);
          border-radius: 4px;
        }

        /* Enhanced glass morphism effects */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Dramatic reveal animation */
        .dramatic-reveal {
          animation: dramaticReveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes dramaticReveal {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateY(-15deg);
            filter: blur(10px);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05) rotateY(5deg);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
            filter: blur(0px);
          }
        }

        /* Added dramatic entrance animation */
        @keyframes dramaticEntrance {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
            filter: blur(20px);
          }
          60% {
            opacity: 0.8;
            transform: scale(1.2) rotate(0deg);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        .dramatic-entrance {
          animation: dramaticEntrance 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </div>
  )
}

export default LuxuryJewelryLanding
