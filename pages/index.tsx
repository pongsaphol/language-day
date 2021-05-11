import Link from 'next/link'

const Index = () => {
  return (
    <div className="container">
      <section id="easy">
        <h2>Easy</h2>
        <div className="grid">
          <Link href="/0">
            <div className="grid-item">๑</div>
          </Link>
          <Link href="/1">
            <div className="grid-item">๒</div>
          </Link>
          <Link href="/2">
            <div className="grid-item">๓</div>
          </Link>
          <Link href="/3">
            <div className="grid-item">๔</div>
          </Link>
          <Link href="/4">
            <div className="grid-item">๕</div>
          </Link>
          <Link href="/5">
            <div className="grid-item">๖</div>
          </Link>
          <Link href="/6">
            <div className="grid-item">๗</div>
          </Link>
          <Link href="/7">
            <div className="grid-item">๘</div>
          </Link>
          <Link href="/8">
            <div className="grid-item">๙</div>
          </Link>
        </div>
      </section>
      <section id="hard">
        <h2>Hard</h2>
        <div className="grid">
          <Link href="/9">
            <div className="grid-item">๑</div>
          </Link>
          <Link href="/10">
            <div className="grid-item">๒</div>
          </Link>
          <Link href="/11">
            <div className="grid-item">๓</div>
          </Link>
          <Link href="/12">
            <div className="grid-item">๔</div>
          </Link>
          <Link href="/13">
            <div className="grid-item">๕</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Index
