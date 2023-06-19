import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceivePost } from "../states/posts/action";

function HomePage() {
  const { posts = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePost());
  }, [dispatch]);

  return (
    <div className="container align-content-center my-5">
      {posts.map((post) => {
        return (
          <div className="col-lg-8 card-group mb-5" key={post.id}>
            <div className="card profile-card-5">
              <div className="card-img-block">
                <div className="row g-0 card-img-top">
                  <div className="col-lg-12 text-center"></div>

                  <div className="col-lg-12 text-center">
                    <h2>{post.title}</h2>
                  </div>

                  <div className="col-lg-12">
                    <div className="card-text text-center">{post.body}</div>
                  </div>
                </div>
              </div>
              <div className="card profile-card-5 pt-2 pb-2 ps-2">
                <div className="row g-0 justify-content-between align-content-center mt-2">
                  <div className="col-lg-8 text-center">
                    <div className="row g-0 gap-1 mx-5">
                      <div
                        className="col-lg-3"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid black",
                          borderRadius: "20px",
                        }}
                      >
                        <p style={{ marginTop: "10px" }}>
                          User Id :{post.userId}
                        </p>
                      </div>
                      <div className="col-lg-3 ms-2">
                        <p style={{ marginTop: "10px" }}>{}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default HomePage;
