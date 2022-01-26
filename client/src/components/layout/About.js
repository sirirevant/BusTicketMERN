import React, { Fragment } from 'react'

const about = () => {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Old+Standard+TT:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <header className="header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 text-center">
              <h1><strong>Welcome to Sardaar Bus Travels</strong></h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
                quis et iure tempora minima similique amet cum commodi id rerum,
                in non doloremque veniam accusamus distinctio, at animi ea
                ducimus, ad eveniet ipsam esse beatae molestias! Tempore, officia,
                vero, unde distinctio tempora natus blanditiis inventore earum ex
                officiis excepturi!
              </p>
              <button className="btn btn-primary">Start Connecting !</button>
            </div>
          </div>
        </div>
      </header>
      <section className="message py-5">
        <div className="container text-center">
          <h1>We've got what you need!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
            quis et iure tempora minima similique amet cum commodi id rerum,
            in non doloremque veniam accusamus distinctio, at animi ea

          </p>
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Register and start !!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
            quis et iure tempora minima similique amet cum commodi id rerum,
            in non doloremque veniam accusamus distinctio, at animi
          </p>
          <button className="btn btn-primary">Register</button>
        </div>
      </section>

      <section >
        <div className="container text-center">
          <h1>Let's Get In Touch!</h1>
          <p>
            Ready to start your next project with us? Give us a call or send us an
            email and we will get back to you as soon as possible!
          </p>
          <i className="fa fa-phone myicon text-warning"></i>
          <i className="fa fa-heart myicon text-danger"></i>
          <p>+919670826753</p>
          <p>sardaarsingh8745@gmail.com</p>
        </div>
      </section>

      <section className="footer bg-dark">
        <div className="container py-5 text-white text-center">
          <p>Copyright © 2021 - Sardaar Pvt Ltd.</p>
        </div>
      </section>

    </Fragment>
  )
}

export default about