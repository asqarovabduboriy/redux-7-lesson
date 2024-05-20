import React, { useEffect,useState } from "react";
import "./Single.css";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../context/products";
import { FaStar } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);


  const initialImage = data?.images && data.images.length > 0 ? data.images[0] : null;
  const [mainImage, setMainImage] = useState(initialImage);
  const handleImageClick = (selectedImage) => {
    setMainImage(selectedImage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div className="container">
          <div className="big_wrapper_flex">
          <div className="wrapper_imgs_big">
      <div className="img_wrapper">
        {mainImage === null ?<img src={data?.thumbnail} alt="" /> : <img src={mainImage} alt={data?.title} /> }
      </div>
      <div className="small_img">
        {data?.images.map((el, index) => (
          <div className="small_img_wrapper" key={index} onClick={() => handleImageClick(el)}>
            <img src={el} alt="" />
          </div>
        ))}
      </div>
    </div>

            <div className="wrapper_info_text">
              <div className="brand">
                <h3>{data?.brand}</h3>
              </div>
              <div className="category">
                <span>{data?.category}</span>
              </div>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              <div className="rating">
                {Array.from({ length: Math.round(data?.rating) }).map(
                  (_, index) => (
                    <FaStar key={index} className="star_card" />
                  )
                )}
                <p style={{ marginBottom: "0px" }}>{data?.rating}</p>
              </div>
              <div className="price">
                <h3>${data?.price}</h3>
                <h4>stock: {data?.stock}</h4>
              </div>
              <div className="harakteristika">
                <h1>Harakteristika</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  distinctio architecto necessitatibus numquam facere quos
                  assumenda. Ad ullam repellat alias, in deserunt minus numquam
                  impedit reprehenderit, odio dolore amet inventore, delectus
                  laborum. Dolore animi perspiciatis accusantium quisquam
                  itaque, deserunt vitae hic ea possimus, placeat officiis fugit
                  veritatis architecto illo nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Single;
