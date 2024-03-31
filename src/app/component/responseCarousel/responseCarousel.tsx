"use client";
import React, { FunctionComponent } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselData = {
	title?: string;
	text?: string;
	imageUrl?: string;
};

interface IReactiveCarouselProps {
	items: CarouselData[];
}

const ReactiveCarousel: FunctionComponent<IReactiveCarouselProps> = (props) => {
	const { items } = props;
	return (
		<Carousel
			showArrows={true}
			showIndicators={false}
			showStatus={false}
			infiniteLoop={true}
			dynamicHeight={false}
			showThumbs={false}
		>
			{items.map((item, i) => (
				<div key={i}>
					<div>
						<img src={item.imageUrl} alt="slides" />
					</div>
					<div>
						<h2>{item.title}</h2>
						<p>{item.text}</p>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default ReactiveCarousel;
