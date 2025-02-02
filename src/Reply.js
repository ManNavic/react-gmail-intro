import '../src/styles/reply.css'

function Reply() {
  return (
    <div className="reply">
      <svg fill="#808080" version="1.1" id="svg">
        <g>
          <path
            d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
            S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
            c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
            c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
            c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
          />
        </g>
      </svg>
      <div className="message_box">
        <div className="line_one">
          <svg viewBox="0 0 64 64" id="reply_icon">
            <path
              fill="#808080"
              d="M6.54 55.08a1.91 1.91 0 0 1-.62-.1 2 2 0 0 1-1.38-2c0-.3 2.06-29.34 31.18-31.62V10.92a2 2 0 0 1 3.43-1.4l19.74 20.16a2 2 0 0 1 0 2.8L39.15 52.64a2 2 0 0 1-3.43-1.4V41c-19.44.74-27.41 13-27.49 13.15a2 2 0 0 1-1.69.93Zm33.18-39.26v7.41a2 2 0 0 1-1.93 2c-18.84.69-25.58 13.24-28 21.31 5-4.32 13.91-9.6 27.81-9.6h.09a2 2 0 0 1 2 2v7.41l15-15.26Z"
            ></path>
          </svg>
          <svg viewBox="0 0 100 100">
            <path
              fill="#808080"
              d="M81.8,35.9L52.3,68.6c-1.2,1.4-3.4,1.4-4.6,0L18.2,35.9c-1.9-2.1-0.5-5.5,2.3-5.5h59 C82.3,30.4,83.7,33.8,81.8,35.9z"
              id="drop_icon"
            ></path>
          </svg>
          <p>Freepik Company (no-replay@freepik.com)</p>
          <svg viewBox="0 0 64 64">
            <g fill="#222222" id="arrow_icon">
              <path
                d="M41 59H23A18 18 0 0 1 5 41V23A18 18 0 0 1 23 5h18a18 18 0 0 1 18 18v18a18 18 0 0 1-18 18ZM23 9A14 14 0 0 0 9 23v18a14 14 0 0 0 14 14h18a14 14 0 0 0 14-14V23A14 14 0 0 0 41 9Z"
                fill="#000000"
              ></path>
              <path
                d="M32 45.74a2 2 0 0 1-2-2V20.26a2 2 0 0 1 4 0v23.48a2 2 0 0 1-2 2Z"
                fill="#000000"
              ></path>
              <path
                d="M32 45.74a2 2 0 0 1-1.29-.47L19.5 35.86a2 2 0 1 1 2.57-3.06l11.22 9.41a2 2 0 0 1 .24 2.79 2 2 0 0 1-1.53.74Z"
                fill="#000000"
              ></path>
              <path
                d="M32 45.74a2 2 0 0 1-1.53-.74 2 2 0 0 1 .24-2.82l11.22-9.38a2 2 0 1 1 2.57 3.06l-11.21 9.41a2 2 0 0 1-1.29.47Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
        <div className="line_two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            id="more_icon"
          >
            <circle cx="459.2" cy="256" r="50.8" fill="#000000"></circle>
            <circle cx="256" cy="256" r="50.8" fill="#000000"></circle>
            <circle cx="52.8" cy="256" r="50.8" fill="#000000"></circle>
          </svg>
        </div>
        <div className="line_three">
          <button>
            Send{' '}
            <span>
              <svg viewBox="0 0 100 100" width="15" id="drop_icon_bttn">
                <path
                  fill="#ffffff"
                  d="M81.8,35.9L52.3,68.6c-1.2,1.4-3.4,1.4-4.6,0L18.2,35.9c-1.9-2.1-0.5-5.5,2.3-5.5h59 C82.3,30.4,83.7,33.8,81.8,35.9z"
                ></path>
              </svg>
            </span>
          </button>
          <p>A</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              fill="#101820"
              d="M14 31a6 6 0 0 1-6-6V9a8 8 0 0 1 16 0v19a1 1 0 0 1-2 0V9a6 6 0 0 0-12 0v16a4 4 0 0 0 8 0V10a2 2 0 0 0-4 0v13a1 1 0 0 1-2 0V10a4 4 0 0 1 8 0v15a6 6 0 0 1-6 6Z"
              data-name="Layer 43"
              className="color101820 svgShape"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 32 32"
            viewBox="0 0 32 32"
          >
            <path
              fill="#34485c"
              d="M27.3,4.7c-2.3-2.3-6.1-2.3-8.5,0l-2.6,2.6l1.4,1.4l2.6-2.6c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7   l-7.1,7.1c-1.6,1.6-4.1,1.6-5.7,0c-0.5-0.5-0.8-1.1-0.9-1.9l-1.6,1.6c0.3,0.6,0.6,1.2,1.1,1.7c2.3,2.3,6.1,2.3,8.5,0l7.1-7.1   C29.7,10.8,29.7,7,27.3,4.7z"
              className="color34485c svgShape"
            ></path>
            <path
              fill="#34485c"
              d="M11.8,25.9c-1.6,1.6-4.1,1.6-5.7,0s-1.6-4.1,0-5.7l7.1-7.1c1.6-1.6,4.1-1.6,5.7,0c0.5,0.5,0.8,1.2,0.9,1.9   l1.6-1.6c-0.3-0.6-0.6-1.2-1.1-1.7c-2.3-2.3-6.1-2.3-8.5,0l-7.1,7.1c-2.3,2.3-2.3,6.1,0,8.5s6.1,2.3,8.5,0l2.6-2.6l-1.4-1.4   L11.8,25.9z"
              className="color34485c svgShape"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.92">
            <g data-name="Layer 2" fill="#000000" className="color000 svgShape">
              <path
                d="M256,511.92A256,256,0,0,1,75,75,256,256,0,1,1,437,437,254.36,254.36,0,0,1,256,511.92ZM256,20C125.87,20,20,125.85,20,256s105.87,236,236,236S492,386.06,492,256,386.13,20,256,20Z"
                fill="#000000"
                className="color000 svgShape"
              ></path>
              <path
                d="M256 451.68h0c-36.43 0-71.78-13.4-105.07-39.81C117.21 385.11 87.07 346 61.34 295.64a10 10 0 0112.48-13.88c119.18 45.63 245.18 45.63 364.36 0a10 10 0 0112.48 13.88c-25.73 50.37-55.87 89.47-89.59 116.23C327.78 438.28 292.43 451.68 256 451.68zM91.54 309.28c46 79.17 103.81 122.4 164.46 122.4s118.43-43.23 164.46-122.4A525 525 0 01256 335.84 525 525 0 0191.54 309.28zM200.78 215.76a10 10 0 01-10-10 35.19 35.19 0 00-70.37 0 10 10 0 01-20 0 55.19 55.19 0 01110.37 0A10 10 0 01200.78 215.76zM401.59 215.76a10 10 0 01-10-10 35.19 35.19 0 00-70.37 0 10 10 0 01-20 0 55.19 55.19 0 01110.37 0A10 10 0 01401.59 215.76z"
                fill="#000000"
                className="color000 svgShape"
              ></path>
              <path
                d="M256,381.41c-57.44,0-111.56-7.51-152.39-21.14a10,10,0,1,1,6.33-19c38.84,13,90.71,20.11,146.06,20.11s107.22-7.14,146.06-20.11a10,10,0,0,1,6.33,19C367.56,373.9,313.44,381.41,256,381.41Z"
                fill="#000000"
                className="color000 svgShape"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path
              d="M22,14.44a.62.62,0,0,0,0-.13.61.61,0,0,1,0-.12l-.05-.12h0l-6-10.29A1,1,0,0,0,15,3.29H9a1,1,0,0,0-.5.13l-.11.08a.73.73,0,0,0-.09.08.58.58,0,0,0-.1.12s0,0-.06.08h0l-6,10.33a1,1,0,0,0,0,1l3,5.08h0a.83.83,0,0,0,.11.15l0,.06a1.1,1.1,0,0,0,.44.26h0a.83.83,0,0,0,.22,0H18a1,1,0,0,0,.86-.49l3-5.14h0l.05-.12a.61.61,0,0,1,0-.12.53.53,0,0,0,0-.13.51.51,0,0,0,0-.13A.59.59,0,0,0,22,14.44ZM6,17.73l-1.79-3.1L9,6.27l.87,1.5,1,1.66L7,15.91ZM12,11.41l1.26,2.16H10.72Zm5.43,7.3H7.7l1.84-3.14h9.72Zm-1.86-5.14L10.74,5.29h3.69l4.83,8.28Z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="image"
          >
            <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="lock-mail"
          >
            <path d="M20.5,7.44V6.26a3,3,0,1,0-6,0V7.44a3,3,0,0,0-2,2.82v2a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3v-2A3,3,0,0,0,20.5,7.44Zm-4-1.18a1,1,0,1,1,2,0v1h-2Zm4,6a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.67l5.88,5.88a1,1,0,0,0,1.42-1.41L4.91,8.26H10.5a1,1,0,0,0,0-2h-6a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3v-1A1,1,0,0,0,20.5,17.26Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="m46.242 10.245-4.467 4.467-8.616-8.352 4.599-4.599a5.999 5.999 0 1 1 8.484 8.484zm-7.083 7.08L11.694 44.79 0 48.048l3.207-11.739L30.57 8.946l8.589 8.379z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Reply
