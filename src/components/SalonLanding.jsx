import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Scissors, Sparkles, Palette, Star, Instagram, Facebook, Phone, Mail, MapPin, Menu, X, MessageCircle, MapPinned } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import image1 from '@/assets/image1.jpeg'
import image2 from '@/assets/image2.jpeg'
import image3 from '@/assets/image3.jpeg'
import logo from '@/assets/logo.png'

export default function SalonLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const services = [
    {
      icon: Scissors,
      title: "Hair Cutting & Styling",
      description: "Expert cuts and styles for all hair types, from classic to contemporary looks.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Professional coloring services including highlights, balayage, and full color treatments.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Hair Treatments",
      description: "Revitalizing treatments to nourish and strengthen your hair for lasting beauty.",
      image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80"
    },
    {
      icon: Star,
      title: "Bridal & Special Occasions",
      description: "Elegant styling for your special day with personalized attention to detail.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"
    },
    {
      icon: Scissors,
      title: "Beard Grooming",
      description: "Professional beard trimming, shaping, and grooming services for gentlemen.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Facial & Spa",
      description: "Rejuvenating facial treatments and spa services for complete relaxation.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely love my new hairstyle! The team at Gallery Unisex Salon is incredibly talented and professional.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best salon experience I've ever had. They really know how to make you look and feel your best.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The attention to detail is remarkable. I always leave feeling pampered and beautiful!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    }
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&q=80"
  ]

  const scrollToSection = (id) => {
    // Handle "Contact Us" special case
    const targetId = id === 'contact us' ? 'contact' : id
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Action Buttons */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 flex flex-col gap-3 md:gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918825989718"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat on WhatsApp
          </span>
        </motion.a>

        {/* Google Maps Button */}
        <motion.a
          href="https://www.google.com/maps/place/Gallery+Unisex+Salon/@12.78841,80.0658653,12z/data=!4m10!1m2!2m1!1sgallery+unisex+salon!3m6!1s0x3a5251b536f106b5:0x2638a899a21a4ed2!8m2!3d12.78841!4d80.2183006!15sChRnYWxsZXJ5IHVuaXNleCBzYWxvbloWIhRnYWxsZXJ5IHVuaXNleCBzYWxvbpIBDGJlYXV0eV9zYWxvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOUmEwbzJha3QzRUFF4AEA-gEECBoQRg!16s%2Fg%2F11y3tbx7zd?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8">
              <path fill="#4285F4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle fill="#FFFFFF" cx="12" cy="9" r="2.5"/>
              <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.27.43.58.85.91 1.27L12 22l4.68-6.89c.33-.42.64-.84.91-1.27C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              <path fill="#FBBC04" d="M12 13.5c-1.38 0-2.5-1.12-2.5-2.5 0-.53.17-1.02.46-1.42-.29.4-.46.89-.46 1.42 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.53-.17-1.02-.46-1.42.29.4.46.89.46 1.42 0 1.38-1.12 2.5-2.5 2.5z"/>
              <path fill="#34A853" d="M12 22s-7-7.75-7-13c0-.87.17-1.7.47-2.47C6.27 8.03 7 9.92 7 12c0 3.25 5 10 5 10z"/>
            </svg>
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            View on Maps
          </span>
        </motion.a>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Gallery Unisex Salon" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Gallery', 'About', 'Contact Us'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'Gallery', 'About', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 font-display"
          >
            Gallery Unisex Salon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-body"
          >
            Where Beauty Meets Artistry
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of professional hair and beauty services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
              Our Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations and satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="gallery-item relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay absolute inset-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Gallery Unisex Salon is a premier destination for hair and beauty services. With years of experience and a passion for excellence, our talented team of stylists and beauticians are dedicated to bringing out your natural beauty.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that every client deserves personalized attention and care. Using the latest techniques and premium products, we ensure that you leave our salon looking and feeling your absolute best.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our modern facility provides a relaxing atmosphere where you can unwind and enjoy a transformative beauty experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
                alt="Salon Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span className="text-lg font-semibold text-primary">Special Offers</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
              Exclusive Deals For You
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our amazing offers and packages designed just for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: image1, delay: 0 },
              { image: image2, delay: 0.2 },
              { image: image3, delay: 0.4 }
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: offer.delay, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  style={{ height: '550px' }}
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(184, 134, 11, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={offer.image}
                    alt={`Special Offer ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span className="text-lg font-semibold text-primary">FAQ's</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
              Our Expert Answers
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What Kind Of Services Do You Offer?",
                answer: "We provide comprehensive Hair, Skin, Nails and Bridal Services including professional cutting & styling, coloring, treatments, facials, manicures, pedicures, and complete bridal makeovers tailored to your special day."
              },
              {
                question: "How Much Experienced Are You?",
                answer: "Our team brings over 15 years of combined experience in the beauty industry. Each stylist and beautician is professionally trained and certified, continuously updating their skills with the latest trends and techniques."
              },
              {
                question: "What Kind Of Branded Products Do You Use?",
                answer: "We exclusively use premium international brands including L'Oréal Professional, Schwarzkopf, Wella, and other top-tier products. All our products are authentic, dermatologically tested, and safe for all skin and hair types."
              },
              {
                question: "Do I Need To Book An Appointment?",
                answer: "Yes, booking an appointment is recommended to ensure a hassle-free experience and guarantee your preferred time slot. You can book via phone or walk-ins are also welcome based on availability."
              },
              {
                question: "What Are Your Payment Options?",
                answer: "We accept all major payment methods including cash, credit/debit cards, UPI, and digital wallets for your convenience."
              }
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-border"
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full py-6 flex items-start justify-between text-left group"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-primary text-2xl font-bold mt-1"
                        >
                          ▶
                        </motion.span>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="text-muted-foreground leading-relaxed pb-6 pl-12 pr-4"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">Gallery Unisex Salon</h3>
              <p className="text-background/80 mb-6">
                Your destination for beauty and style excellence.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-background/80">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>088259 89718</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>info@galleryunisex.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>No: 325/16B, Veeranam Rd, Sathankuppam, Kelambakkam, Tamil Nadu 603103</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-background/80">
                <li>Monday - Sunday</li>
                <li className="font-semibold text-primary">8:00 AM - 10:30 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/60">
              © 2025 Gallery Unisex Salon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
