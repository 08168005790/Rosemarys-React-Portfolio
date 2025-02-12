import React from 'react'

function Home() {
    
  return (
    <div class="wrapper">
    <header>
      <nav class="nav-bar">
        <div class="logo-container"><img src="/images/logo.svg" alt="logo"/></div>
        <button class="btn">Try it free</button>
      </nav>
      <section>
      <div class="header-texts">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
        Create connections with your users as you engage in genuine discussion.</p>
        <button class="btn">Get Started For Free</button>
      </div>
      <div class="header-img">
        <img src="./images/illustration-mockups.svg" alt="illustration-img"/>
      </div>
    </section>
    </header>
    <main>
      <article class="card">
        <div class="card-text">
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a strong, loyal community.
            Think of the insightful conversations you miss out on with a feedback form.
          </p>
        </div>
          <div class="card-img"><img src="./images/illustration-grow-together.svg" alt="illustration-image"/></div>
      </article>
      <article class="card">
        <div class="card-text">
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life, so why do it online?
            Our threads have just-in-time loading for a more natural flow.</p>
          </div>
          <div class="card-img"><img src="./images/illustration-flowing-conversation.svg" alt="illustration-image"/></div>
      </article>
      <article class="card">
        <div class="card-text">
          <h2>Your Users</h2>
          <p>It takes no time at all to integrate Huddle with your app's authentication solution. 
          This means, once signed in to your app, your users can start chatting immediately.</p>
        </div>
          <div class="card-img"><img src="./images/illustration-your-users.svg" alt="illustration-image"/></div>
      </article>
      <div class="overlapping-box">
        <h2>Ready To Build Your Community?</h2>
        <button class="btn">Get Started For Free</button>
      </div>
    </main>
    <footer>
      <section class="footer-section">
        <div class="footer-logo">
          <img src="./images/footer-logo.svg" alt=""/>
        </div>
        <nav>
              <ul>
                <li><a href="#"><span><img src="./images/icon-location.svg" alt="icon-location"/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</a></li>
                <li><a href="#"><span><img src="./images/icon-phone.svg" alt="icon-phone"/></span>+1-543-123-4567</a></li>
                <li><a href="#"><span><img src="./images/icon-email.svg" alt="icon-email"/></span>example@huddle.com</a></li>
              </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </nav>
      </section>
      <section>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">ROSEMARY</a>.
        </p>
      </section>
    </footer>
  </div>

  )
}

export default Home;