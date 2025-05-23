import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt, className, style, placeholder }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "50px",
  });

  return (
    <div ref={ref} className={className} style={style}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        placeholder || (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
            }}
          >
            Loading...
          </div>
        )
      )}
    </div>
  );
};

export default LazyImage;
