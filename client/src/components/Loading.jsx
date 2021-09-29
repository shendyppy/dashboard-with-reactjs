function Loading() {
  return (
    <>
      <div className="container mx-auto text-center mt-10">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_ctopYC.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </>
  );
}

export default Loading;
