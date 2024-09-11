export default function ImageOrLink({ href, src }) {
  const imageHeight = "max-h-4 vs:max-h-8 sm:max-h-16";
  return (
    <div className="mb-4 ml-4">
      {href ? (
        <a href={href} target="_blank">
          <img src={src} className={imageHeight} alt="" />
        </a>
      ) : (
        <img src={src} className={imageHeight} alt="" />
      )}
    </div>
  );
}
