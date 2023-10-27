import React from 'react';

const Contact = () => {
  return (
    <div>
        <h2 className='text-center'>contact Form </h2>
      <form className="p-5 mx-auto w-50 "style={{ width: "100%", height: "500px" ,backgroundColor:"black",borderRadius:"5px 15px 0px 15px "}}>
        <input
          className="form-control rounded-3 mt-3 p-lg-3 p-md-3 p-sm-1"
          type="text"
          placeholder="Email Name"
          aria-label=".form-control-sm example"
          required
        />
        <input
          className="form-control rounded-3 mt-3 p-lg-3 p-md-3 p-sm-1"
          type="email"
          placeholder="Enter Email"
          aria-label=".form-control-sm example"
          required
        />
        <input
          className="form-control rounded-3 mt-3 p-lg-3 p-md-3 p-sm-1"
          type="text"
          placeholder="Enter Contact no"
          aria-label=".form-control-sm example"
          required
        />
        <textarea
          className="form-control mt-3"
          id="exampleFormControlTextarea1"
          rows="3"
          required
          placeholder="Message"
        ></textarea>
        <button
          className="rounded-3 mt-3 p-3 form-control rounded-1 text-light fs-4 fw-semibold border-0 mb-3"
          style={{ backgroundColor: 'orangered' }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
