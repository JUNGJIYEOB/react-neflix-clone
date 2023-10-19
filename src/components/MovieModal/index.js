import React, { useRef, useCallback } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

//가독성을 위해 구조분할로 던짐 그러나 많아지면 선택?
function MovieModal({
                        backdrop_path,
                        title,
                        overview,
                        name,
                        release_date,
                        first_air_date,
                        vote_average,
                        setModalOpen,
                    }) {
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });
    return (
        <div className="presentation">
            <div className="wrapper-modal">
                <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

                    <img
                        className="modal__poster-img"
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        //<img> 태그의 alt 속성은 이미지를 보여줄 수 없을 때 해당 이미지를 대체할 텍스트를 명시합니다.
                        alt="modal__poster-img"
                    />

                    <div className="modal__content">
                        <p className="modal__details">
                            <span className="modal__user_perc">100% for you</span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>

                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className="modal__overview"> 평점: {vote_average}</p>
                        <p className="modal__overview"> {overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;
