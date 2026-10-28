import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import './FaqPage.css'

const faqCategories = ['All questions', 'Choosing a puppy', 'Health & vaccination', 'Payment', 'Collection & delivery']

const questions = [
  {
    category: 'Choosing a puppy',
    question: 'Which puppy breed is right for my family?',
    answer: 'Think about your home, daily routine, activity level, and the kind of companion you hope to welcome. Tell us a little about your family and we can talk through the puppies and breeds that may suit you.',
  },
  {
    category: 'Choosing a puppy',
    question: 'Can I meet a puppy before deciding?',
    answer: 'Yes. Contact us to arrange a visit or video call, subject to availability. It is a lovely way to see a puppy’s personality and ask any questions before you make a decision.',
  },
  {
    category: 'Choosing a puppy',
    question: 'How old are the puppies when they go to their new homes?',
    answer: 'Puppy age and readiness can vary. We will share the age, care information, and expected collection timing for the puppy you are interested in so you can plan ahead.',
  },
  {
    category: 'Health & vaccination',
    question: 'Are the puppies checked by a veterinarian?',
    answer: 'We will provide the available veterinary health information for each puppy and explain what checks have been completed. Please review the records with us and your own veterinarian.',
  },
  {
    category: 'Health & vaccination',
    question: 'Which vaccinations has my puppy received?',
    answer: 'Vaccination status and the next due date depend on the puppy’s age and individual records. We will share the vaccination information we have before collection so your veterinarian can advise on the next steps.',
  },
  {
    category: 'Health & vaccination',
    question: 'Will I receive health and care records?',
    answer: 'We will go over the health and care information available for your puppy, including relevant veterinary and vaccination records, and answer questions about their routine.',
  },
  {
    category: 'Health & vaccination',
    question: 'What should I feed my puppy at first?',
    answer: 'Ask us what your puppy is currently eating so you can keep their routine consistent after the move. If you plan to change their food, consult your veterinarian and make any transition gradually.',
  },
  {
    category: 'Payment',
    question: 'How much does a puppy cost?',
    answer: 'The current price is shown on each puppy’s profile. Please contact us to confirm the price and availability before making arrangements.',
  },
  {
    category: 'Payment',
    question: 'How do I reserve a puppy?',
    answer: 'Once you have chosen a puppy, contact us to discuss availability and the reservation process. We will explain any payment steps and terms before you decide to proceed.',
  },
  {
    category: 'Payment',
    question: 'Which payment methods do you accept?',
    answer: 'Payment methods and any applicable terms are confirmed directly with our team. Please contact us before sending a payment so we can share the current details.',
  },
  {
    category: 'Collection & delivery',
    question: 'Can I collect my puppy in person?',
    answer: 'Collection can be arranged by appointment once your puppy is ready. Contact us to confirm timing and the location details.',
  },
  {
    category: 'Collection & delivery',
    question: 'Do you offer puppy delivery?',
    answer: 'Delivery options depend on your location and the puppy’s readiness. Get in touch to discuss possible arrangements and any associated costs before confirming.',
  },
  {
    category: 'Collection & delivery',
    question: 'What should I bring home for my puppy?',
    answer: 'Prepare a safe, quiet space, a cozy bed, food and water bowls, puppy food, and a collar or harness. We can share the current feeding and care routine to help your puppy settle in.',
  },
]

function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [openQuestion, setOpenQuestion] = useState(null)

  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return questions.filter((item) => {
      const matchesCategory = activeCategory === faqCategories[0] || item.category === activeCategory
      const matchesSearch = !query || `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const updateCategory = (category) => {
    setActiveCategory(category)
    setOpenQuestion(null)
  }

  const updateSearch = (event) => {
    setSearchQuery(event.target.value)
    setOpenQuestion(null)
  }

  return (
    <SiteLayout className="faq-page" title="FAQs | PawFect Pups">
      <section className="faq-hero">
        <span className="faq-hero-doodle faq-doodle-left" aria-hidden="true">♡</span>
        <span className="faq-hero-doodle faq-doodle-right" aria-hidden="true">✳</span>
        <p className="eyebrow">Good to know</p>
        <h1>A few little<br /><span>questions.</span></h1>
        <p>All the helpful details for finding, welcoming, and caring for your new best friend.</p>
      </section>

      <section className="faq-content-section" aria-label="Frequently asked questions">
        <div className="faq-search-wrap">
          <label htmlFor="faq-search">Have a question in mind?</label>
          <div className="faq-search-box">
            <span aria-hidden="true">⌕</span>
            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={updateSearch}
              placeholder="Search breeds, health, payment..."
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search">
                ×
              </button>
            )}
          </div>
        </div>

        <div className="faq-page-layout">
          <aside className="faq-sidebar" aria-label="FAQ categories">
            <h2>Browse by topic</h2>
            <div className="faq-category-list">
              {faqCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`faq-category-button${activeCategory === category ? ' is-active' : ''}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => updateCategory(category)}
                >
                  <span>{category}</span>
                  {category === activeCategory && <span aria-hidden="true">↗</span>}
                </button>
              ))}
            </div>
            <div className="faq-help-card">
              <span className="faq-help-icon" aria-hidden="true">♡</span>
              <h3>Still curious?</h3>
              <p>We are always happy to help with your puppy questions.</p>
              <a href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%20have%20a%20question." target="_blank" rel="noreferrer">
                Ask us anything <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>

          <div className="faq-results">
            <div className="faq-results-heading">
              <div>
                <p className="eyebrow">{activeCategory === 'All questions' ? 'PawFect answers' : activeCategory}</p>
                <h2>{searchQuery ? 'Search results' : 'Frequently asked questions'}</h2>
              </div>
              <span>{filteredQuestions.length} {filteredQuestions.length === 1 ? 'answer' : 'answers'}</span>
            </div>

            {filteredQuestions.length > 0 ? (
              <div className="faq-accordion">
                {filteredQuestions.map((item, index) => {
                  const isOpen = openQuestion === item.question
                  const answerId = `faq-answer-${index}`

                  return (
                    <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                        >
                          <span>{item.question}</span>
                          <span className="faq-plus" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                        </button>
                      </h3>
                      {isOpen && <p className="faq-answer" id={answerId}>{item.answer}</p>}
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="faq-empty-state" role="status">
                <span aria-hidden="true">🐾</span>
                <h3>No answers found just yet</h3>
                <p>Try a different search or choose another topic.</p>
                <button type="button" onClick={() => {
                  setSearchQuery('')
                  updateCategory(faqCategories[0])
                }}>
                  Show all questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="faq-bottom-cta">
        <p className="eyebrow">Ready when you are</p>
        <h2>Your new best friend is waiting.</h2>
        <p>Browse our puppies or reach out if you would like a little help finding your match.</p>
        <div>
          <Link className="button button-caramel" to="/puppies">Meet the puppies <span aria-hidden="true">→</span></Link>
          <a className="button button-outline" href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%20have%20a%20question." target="_blank" rel="noreferrer">Chat with us</a>
        </div>
      </section>
    </SiteLayout>
  )
}

export default FaqPage
