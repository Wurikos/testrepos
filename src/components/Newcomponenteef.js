import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Button, Hr, Icon, Image, Input, Link, Text, List, Box } from "@quarkly/widgets";
import QuarklycommunityKitAnimation from "./QuarklycommunityKitAnimation";
import QuarklycommunityKitCarousel from "./QuarklycommunityKitCarousel";
import QuarklycommunityKitYoomoneyDonateForm from "./QuarklycommunityKitYoomoneyDonateForm";
import QuarklycommunityKitBackToTop from "./QuarklycommunityKitBackToTop";
import QuarklycommunityKitLoopText from "./QuarklycommunityKitLoopText";
import QuarklycommunityKitScrollIndicator from "./QuarklycommunityKitScrollIndicator";
import QuarklycommunityKitCounter from "./QuarklycommunityKitCounter";
import QuarklycommunityKitFbComment from "./QuarklycommunityKitFbComment";
import QuarklycommunityKitFbLike from "./QuarklycommunityKitFbLike";
import QuarklycommunityKitVkComments from "./QuarklycommunityKitVkComments";
import QuarklycommunityKitVkPage from "./QuarklycommunityKitVkPage";
import QuarklycommunityKitTable from "./QuarklycommunityKitTable";
import QuarklycommunityKitYouTube from "./QuarklycommunityKitYouTube";
import QuarklycommunityKitLiveChat from "./QuarklycommunityKitLiveChat";
import QuarklycommunityKitYandexMap from "./QuarklycommunityKitYandexMap";
import QuarklycommunityKitSvgShape from "./QuarklycommunityKitSvgShape";
import QuarklycommunityKitCollapse from "./QuarklycommunityKitCollapse";
import QuarklycommunityKitVideo from "./QuarklycommunityKitVideo";
import QuarklycommunityKitVimeo from "./QuarklycommunityKitVimeo";
import QuarklycommunityKitDisqusComment from "./QuarklycommunityKitDisqusComment";
import QuarklycommunityKitDisqus from "./QuarklycommunityKitDisqus";
import QuarklycommunityKitAudio from "./QuarklycommunityKitAudio";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"quarklycommunityKitAnimation": {
		"kind": "QuarklycommunityKitAnimation",
		"props": {}
	},
	"quarklycommunityKitCarousel": {
		"kind": "QuarklycommunityKitCarousel",
		"props": {}
	},
	"quarklycommunityKitYoomoneyDonateForm": {
		"kind": "QuarklycommunityKitYoomoneyDonateForm",
		"props": {}
	},
	"quarklycommunityKitBackToTop": {
		"kind": "QuarklycommunityKitBackToTop",
		"props": {}
	},
	"quarklycommunityKitLoopText": {
		"kind": "QuarklycommunityKitLoopText",
		"props": {}
	},
	"quarklycommunityKitScrollIndicator": {
		"kind": "QuarklycommunityKitScrollIndicator",
		"props": {}
	},
	"quarklycommunityKitCounter": {
		"kind": "QuarklycommunityKitCounter",
		"props": {}
	},
	"quarklycommunityKitFbComment": {
		"kind": "QuarklycommunityKitFbComment",
		"props": {}
	},
	"quarklycommunityKitFbLike": {
		"kind": "QuarklycommunityKitFbLike",
		"props": {}
	},
	"quarklycommunityKitVkComments": {
		"kind": "QuarklycommunityKitVkComments",
		"props": {}
	},
	"quarklycommunityKitVkPage": {
		"kind": "QuarklycommunityKitVkPage",
		"props": {}
	},
	"quarklycommunityKitTable": {
		"kind": "QuarklycommunityKitTable",
		"props": {}
	},
	"quarklycommunityKitVkPage1": {
		"kind": "QuarklycommunityKitVkPage",
		"props": {}
	},
	"quarklycommunityKitTable1": {
		"kind": "QuarklycommunityKitTable",
		"props": {}
	},
	"quarklycommunityKitYouTube": {
		"kind": "QuarklycommunityKitYouTube",
		"props": {}
	},
	"quarklycommunityKitLiveChat": {
		"kind": "QuarklycommunityKitLiveChat",
		"props": {}
	},
	"quarklycommunityKitYandexMap": {
		"kind": "QuarklycommunityKitYandexMap",
		"props": {}
	},
	"quarklycommunityKitSvgShape": {
		"kind": "QuarklycommunityKitSvgShape",
		"props": {}
	},
	"quarklycommunityKitCollapse": {
		"kind": "QuarklycommunityKitCollapse",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"quarklycommunityKitVideo": {
		"kind": "QuarklycommunityKitVideo",
		"props": {}
	},
	"quarklycommunityKitVimeo": {
		"kind": "QuarklycommunityKitVimeo",
		"props": {}
	},
	"quarklycommunityKitDisqusComment": {
		"kind": "QuarklycommunityKitDisqusComment",
		"props": {}
	},
	"quarklycommunityKitDisqus": {
		"kind": "QuarklycommunityKitDisqus",
		"props": {}
	},
	"quarklycommunityKitAudio": {
		"kind": "QuarklycommunityKitAudio",
		"props": {}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"section": {
		"kind": "Section",
		"props": {
			"padding": "100px 0",
			"sm-padding": "40px 0"
		}
	},
	"sectionOverride": {
		"kind": "Override",
		"props": {
			"slot": "SectionContent",
			"align-items": "center"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"children": "About Us"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	},
	"button2": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px",
			"children": "Button"
		}
	},
	"box": {
		"kind": "Box",
		"props": {}
	},
	"button3": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"hr1": {
		"kind": "Hr",
		"props": {}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list1": {
		"kind": "List",
		"props": {}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {}
	}
};

const Newcomponenteef = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<QuarklycommunityKitAnimation {...override("quarklycommunityKitAnimation")} />
		<QuarklycommunityKitCarousel {...override("quarklycommunityKitCarousel")} />
		<QuarklycommunityKitYoomoneyDonateForm {...override("quarklycommunityKitYoomoneyDonateForm")} />
		<QuarklycommunityKitBackToTop {...override("quarklycommunityKitBackToTop")} />
		<QuarklycommunityKitLoopText {...override("quarklycommunityKitLoopText")} />
		<QuarklycommunityKitScrollIndicator {...override("quarklycommunityKitScrollIndicator")} />
		<QuarklycommunityKitCounter {...override("quarklycommunityKitCounter")} />
		<QuarklycommunityKitFbComment {...override("quarklycommunityKitFbComment")} />
		<QuarklycommunityKitFbLike {...override("quarklycommunityKitFbLike")} />
		<QuarklycommunityKitVkComments {...override("quarklycommunityKitVkComments")} />
		<QuarklycommunityKitVkPage {...override("quarklycommunityKitVkPage")} />
		<QuarklycommunityKitTable {...override("quarklycommunityKitTable")} />
		<QuarklycommunityKitVkPage {...override("quarklycommunityKitVkPage1")} />
		<QuarklycommunityKitTable {...override("quarklycommunityKitTable1")} />
		<QuarklycommunityKitYouTube {...override("quarklycommunityKitYouTube")} />
		<QuarklycommunityKitLiveChat {...override("quarklycommunityKitLiveChat")} />
		<QuarklycommunityKitYandexMap {...override("quarklycommunityKitYandexMap")} />
		<QuarklycommunityKitSvgShape {...override("quarklycommunityKitSvgShape")} />
		<QuarklycommunityKitCollapse {...override("quarklycommunityKitCollapse")}>
			<Button {...override("button")} />
		</QuarklycommunityKitCollapse>
		<QuarklycommunityKitVideo {...override("quarklycommunityKitVideo")} />
		<QuarklycommunityKitVimeo {...override("quarklycommunityKitVimeo")} />
		<QuarklycommunityKitDisqusComment {...override("quarklycommunityKitDisqusComment")} />
		<QuarklycommunityKitDisqus {...override("quarklycommunityKitDisqus")} />
		<QuarklycommunityKitAudio {...override("quarklycommunityKitAudio")} />
		<Button {...override("button1")} />
		<Hr {...override("hr")} />
		<Icon {...override("icon")} />
		<Image {...override("image")} />
		<Input {...override("input")} />
		<Link {...override("link")} />
		<List {...override("list")}>
			<Text {...override("text")} />
		</List>
		<Text {...override("text1")} />
		<Section {...override("section")}>
			<Override {...override("sectionOverride")} />
			<Text {...override("text2")} />
			<Text {...override("text3")} />
			<Button {...override("button2")} />
		</Section>
		<Box {...override("box")} />
		<Button {...override("button3")} />
		<Hr {...override("hr1")} />
		<Icon {...override("icon1")} />
		<Image {...override("image1")} />
		<Input {...override("input1")} />
		<Link {...override("link1")} />
		<List {...override("list1")}>
			<Text {...override("text4")} />
		</List>
		<Text {...override("text5")} />
		<Box {...override("box1")} />
		{children}
	</Box>;
};

Object.assign(Newcomponenteef, { ...Box,
	defaultProps,
	overrides
});
export default Newcomponenteef;