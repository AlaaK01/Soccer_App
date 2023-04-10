import React from "react";

const Footer = () => {
  return (
    <footer className="footer-type01">
       
        <div className="footer-type02">
            <div className="container">
                <div className="row"><a href="index-2.html" className="footer-logo"><img src="images/logo.png" alt="image" /></a>

                    <div className="footer-container">
                        <ul className="clearfix">
                            <li><a href="https://www.facebook.com/templatespoint.net" className="bigsocial-link"><i
                                    className="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/" className="bigsocial-link target=_blank"><i
                                    className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.behance.net/" className="bigsocial-link target=_blank"><i
                                    className="fa fa-behance"></i></a></li>
                        </ul>
                        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p></div>
                    <div className="footer-appstore">
                        <figure><a href="#"><img src="images/appstore/apple.png" alt="image" /></a></figure>
                        <figure><a href="#"><img src="images/appstore/google.png" alt="image" /></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;



////Competition.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Flex, Image, Text } from "@aws-amplify/ui-react";
// export default function Competition(props) {
//   const { competition, overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="0px"
//       direction="column"
//       width="250px"
//       height="unset"
//       justifyContent="flex-start"
//       alignItems="center"
//       position="relative"
//       padding="0px 24px 0px 24px"
//       backgroundColor="none"
//       {...getOverrideProps(overrides, "Competition")}
//       {...rest}
//     >
//       <Image
//         width="160px"
//         height="200px"
//         display="block"
//         gap="unset"
//         alignItems="unset"
//         justifyContent="unset"
//         shrink="0"
//         position="relative"
//         borderRadius="0px"
//         padding="0px 0px 0px 0px"
//         objectFit="contain"
//         src={competition?.logoUrl}
//         {...getOverrideProps(overrides, "image")}
//       ></Image>
//       <Flex
//         gap="8px"
//         direction="column"
//         width="unset"
//         height="unset"
//         justifyContent="flex-start"
//         alignItems="center"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         {...getOverrideProps(overrides, "Name")}
//       >
       
//       </Flex>
//     </Flex>
//   );
// }





////MatchLite.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Flex, Text } from "@aws-amplify/ui-react";
// export default function MatchLite(props) {
//   const { matchlite, home, away, overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="24px"
//       direction="row"
//       width="480px"
//       height="100px"
//       justifyContent="space-evenly"
//       alignItems="center"
//       position="relative"
     
//       backgroundColor="rgba(255,255,255,1)"
//       {...getOverrideProps(overrides, "MatchLite")}
//       {...rest}
//     >
//       <Flex
//         gap="0"
//         direction="row"
//         width="148px"
//         height="39px"
//         justifyContent="center"
//         alignItems="center"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         children={home}
//         {...getOverrideProps(overrides, "Frame")}
//       ></Flex>
//      <h5>VS</h5>
//       <Flex
//         gap="16px"
//         direction="column"
//         width="171px"
//         height="39px"
//         justifyContent="center"
//         alignItems="flex-start"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 20px"
//         children={away}
//         {...getOverrideProps(overrides, "Text37732805")}
//       ></Flex>
//     </Flex>
//   );
// }







// //MatchesDetails.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import {
//   Button,
//   Divider,
//   Flex,
//   Icon,
//   Image,
//   Text,
//   View,
// } from "@aws-amplify/ui-react";
// import MyIcon from "./MyIcon";
// export default function MatchesDetails(props) {
//   const { matchDetails, area, overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="8px"
//       direction="column"
//       width="840px"
//       height="117vh"
//       justifyContent="center"
//       alignItems="flex-start"
//       position="relative"
//       padding="0px 0px 0px 0px"
//       backgroundColor="rgba(255,255,255,1)"
//       {...getOverrideProps(overrides, "MatchesDetails")}
//       {...rest}
//     >
//       <Flex
//         gap="16px"
//         direction="row"
//         width="unset"
//         height="unset"
//         justifyContent="center"
//         alignItems="center"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="16px 16px 16px 16px"
//         {...getOverrideProps(overrides, "Header")}
//       >
//         <Flex
//           gap="16px"
//           direction="row"
//           width="unset"
//           height="unset"
//           justifyContent="flex-start"
//           alignItems="center"
//           grow="1"
//           shrink="1"
//           basis="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           {...getOverrideProps(overrides, "Profile")}
//         >
//           <Image
//             width="65px"
//             height="65px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             shrink="0"
//             position="relative"
//             borderRadius="160px"
//             padding="0px 0px 0px 0px"
//             objectFit="cover"
//             src={matchDetails?.refereeImage}
//             {...getOverrideProps(overrides, "image37772760")}
//           ></Image>
//           <Text
//             fontFamily="Inter"
//             fontSize="16px"
//             fontWeight="400"
//             color="rgba(13,26,38,1)"
//             lineHeight="24px"
//             textAlign="left"
//             display="block"
//             direction="column"
//             justifyContent="unset"
//             letterSpacing="0.01px"
//             width="unset"
//             height="unset"
//             gap="unset"
//             alignItems="unset"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             whiteSpace="pre-wrap"
//             children={`${matchDetails?.refereeName}${"             Referee"}`}
//             {...getOverrideProps(overrides, "Rene Brandel")}
//           ></Text>
//         </Flex>
//         <Flex
//           gap="10px"
//           direction="row"
//           width="unset"
//           height="unset"
//           justifyContent="flex-end"
//           alignItems="center"
//           shrink="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           {...getOverrideProps(overrides, "Overflow")}
//         >
//           <View
//             width="24px"
//             height="24px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             overflow="hidden"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             {...getOverrideProps(overrides, "Icon37772763")}
//           >
//             <Icon
//               width="4px"
//               height="16px"
//               viewBox={{ minX: 0, minY: 0, width: 4, height: 16 }}
//               paths={[
//                 {
//                   d: "M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",
//                   fill: "rgba(13,26,38,1)",
//                   fillRule: "nonzero",
//                 },
//               ]}
//               display="block"
//               gap="unset"
//               alignItems="unset"
//               justifyContent="unset"
//               position="absolute"
//               top="16.67%"
//               bottom="16.67%"
//               left="41.67%"
//               right="41.67%"
//               {...getOverrideProps(overrides, "Vector37772764")}
//             ></Icon>
//           </View>
//         </Flex>
//       </Flex>
//       <Image
//         width="unset"
//         height="408px"
//         display="block"
//         gap="unset"
//         alignItems="unset"
//         justifyContent="unset"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         objectFit="cover"
//         src={matchDetails?.imageUrl}
//         {...getOverrideProps(overrides, "image37772765")}
//       ></Image>
//       <Flex
//         gap="16px"
//         direction="row"
//         width="unset"
//         height="unset"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="16px 16px 16px 16px"
//         {...getOverrideProps(overrides, "Options")}
//       >
//         <Flex
//           gap="24px"
//           direction="row"
//           width="unset"
//           height="unset"
//           justifyContent="flex-start"
//           alignItems="flex-start"
//           shrink="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           {...getOverrideProps(overrides, "Share")}
//         >
//           <MyIcon
//             width="24px"
//             height="24px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             overflow="hidden"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             type="favorite_border"
//             {...getOverrideProps(overrides, "MyIcon37772768")}
//           ></MyIcon>
//           <MyIcon
//             width="24px"
//             height="24px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             overflow="hidden"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             type="chat-bubble-outline"
//             {...getOverrideProps(overrides, "MyIcon37772769")}
//           ></MyIcon>
//           <MyIcon
//             width="24px"
//             height="24px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             overflow="hidden"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             type="send"
//             {...getOverrideProps(overrides, "MyIcon37772770")}
//           ></MyIcon>
//         </Flex>
//         <Flex
//           gap="10px"
//           direction="row"
//           width="unset"
//           height="unset"
//           justifyContent="flex-end"
//           alignItems="center"
//           grow="1"
//           shrink="1"
//           basis="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           {...getOverrideProps(overrides, "Bookmark")}
//         >
//           <View
//             width="24px"
//             height="24px"
//             display="block"
//             gap="unset"
//             alignItems="unset"
//             justifyContent="unset"
//             overflow="hidden"
//             shrink="0"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             {...getOverrideProps(overrides, "Icon37772772")}
//           >
//             <Icon
//               width="14px"
//               height="18px"
//               viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
//               paths={[
//                 {
//                   d: "M12 0L2 0C0.9 0 0 0.9 0 2L0 18L7 15L14 18L14 2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15L2 2L12 2L12 15Z",
//                   fill: "rgba(13,26,38,1)",
//                   fillRule: "nonzero",
//                 },
//               ]}
//               display="block"
//               gap="unset"
//               alignItems="unset"
//               justifyContent="unset"
//               position="absolute"
//               top="12.5%"
//               bottom="12.5%"
//               left="20.83%"
//               right="20.83%"
//               {...getOverrideProps(overrides, "Vector37772773")}
//             ></Icon>
//           </View>
//         </Flex>
//       </Flex>
//       <Flex
//         gap="8px"
//         direction="column"
//         width="unset"
//         height="unset"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         {...getOverrideProps(overrides, "Body")}
//       >
//         <Divider
//           width="unset"
//           height="1px"
//           shrink="0"
//           alignSelf="stretch"
//           size="small"
//           orientation="horizontal"
//           {...getOverrideProps(overrides, "Divider")}
//         ></Divider>
//         <Flex
//           gap="8px"
//           direction="column"
//           width="unset"
//           height="110px"
//           justifyContent="flex-start"
//           alignItems="flex-start"
//           shrink="0"
//           alignSelf="stretch"
//           position="relative"
//           padding="16px 16px 16px 16px"
//           {...getOverrideProps(overrides, "local")}
//         >
//           <Text
//             fontFamily="Inter"
//             fontSize="16px"
//             fontWeight="700"
//             color="rgba(13,26,38,1)"
//             lineHeight="20px"
//             textAlign="left"
//             display="block"
//             direction="column"
//             justifyContent="unset"
//             width="unset"
//             height="unset"
//             gap="unset"
//             alignItems="unset"
//             shrink="0"
//             alignSelf="stretch"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             whiteSpace="pre-wrap"
//             children={`${"City: "}${matchDetails?.city}`}
//             {...getOverrideProps(overrides, "Firstname Lastname")}
//           ></Text>
//           <Text
//             fontFamily="Inter"
//             fontSize="16px"
//             fontWeight="400"
//             color="rgba(48,64,80,1)"
//             lineHeight="24px"
//             textAlign="left"
//             display="block"
//             direction="column"
//             justifyContent="unset"
//             letterSpacing="0.01px"
//             width="unset"
//             height="unset"
//             gap="unset"
//             alignItems="unset"
//             shrink="0"
//             alignSelf="stretch"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             whiteSpace="pre-wrap"
//             children={`${matchDetails?.price}${"   $"}`}
//             {...getOverrideProps(
//               overrides,
//               "\u201CLorem ipsum dolor sit amet.\u201D"
//             )}
//           ></Text>
//           <Text
//             fontFamily="Inter"
//             fontSize="14px"
//             fontWeight="400"
//             color="rgba(92,102,112,1)"
//             lineHeight="24px"
//             textAlign="left"
//             display="block"
//             direction="column"
//             justifyContent="unset"
//             width="unset"
//             height="unset"
//             gap="unset"
//             alignItems="unset"
//             shrink="0"
//             alignSelf="stretch"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             whiteSpace="pre-wrap"
//             children={matchDetails?.description}
//             {...getOverrideProps(overrides, "Timestamp")}
//           ></Text>
//         </Flex>
//         <Flex
//           gap="8px"
//           direction="column"
//           width="unset"
//           height="unset"
//           justifyContent="flex-start"
//           alignItems="flex-start"
//           shrink="0"
//           alignSelf="stretch"
//           position="relative"
//           padding="16px 16px 16px 16px"
//           children={area}
//           {...getOverrideProps(overrides, "Area")}
//         ></Flex>
//       </Flex>
//       <Button
//         width="unset"
//         height="unset"
//         gap="20px"
//         padding="7px 35px 7px 35px"
//         shrink="0"
//         alignSelf="stretch"
//         size="large"
//         isDisabled={false}
//         variation="primary"
//         children="Go To Teams "
//         {...getOverrideProps(overrides, "Button")}
//       ></Button>
//     </Flex>
//   );
// }


// //CompetitionNav.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Button, Flex, Image } from "@aws-amplify/ui-react";
// export default function CompetitionNav(props) {
//   const { overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="20px"
//       direction="row"
//       width="1440px"
//       height="70px"
//       justifyContent="center"
//       alignItems="center"
//       position="relative"
//       padding="24px 32px 24px 3px"
//       backgroundColor="rgba(255,255,255,1)"
//       {...getOverrideProps(overrides, "CompetitionNav")}
//       {...rest}
//     >
      
//       <Flex
//         gap="32px"
//         direction="row"
//         width="unset"
//         height="unset"
//         justifyContent="flex-end"
//         alignItems="center"
//         grow="1"
//         shrink="1"
//         basis="0"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         {...getOverrideProps(overrides, "Frame 321")}
//       >
//         <Button
//           width="unset"
//           height="unset"
//           shrink="0"
//           size="small"
//           isDisabled={false}
//           variation="default"
//           children="Add Competition"
//           backgroundColor={'white'}
//           {...getOverrideProps(overrides, "Button")}
//         ></Button>
//         <Image
//           width="30px"
//           height="41px"
//           display="block"
//           gap="unset"
//           alignItems="unset"
//           justifyContent="unset"
//           shrink="0"
//           position="relative"
//           borderRadius="160px"
//           padding="0px 0px 0px 0px"
//           objectFit="cover"
//           {...getOverrideProps(overrides, "image")}
//         ></Image>
//       </Flex>
//     </Flex>
//   );
// }





// //Match.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Flex, Text } from "@aws-amplify/ui-react";
// export default function Match(props) {
//   const { match, home, away, overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="24px"
//       direction="row"
//       width="380px"
//       height="177px"
//       justifyContent="center"
//       alignItems="flex-end"
//       position="relative"
//       padding="24px 24px  24px 24px"
//        backgroundColor="rgba(255,255,255,1)"
//       borderRadius={'100px'}
      
      
//       {...getOverrideProps(overrides, "Match")}
//       {...rest}
//     >
//       <Flex
//         gap="50px"
//         direction="column"
//         width="100px"
//         height="100px"
//         justifyContent="center"
//         alignItems="center"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="0px 0px 0px 0px"
      
//         children={home}
//         {...getOverrideProps(overrides, "Frame37732831")}
//       ></Flex>
//       <Flex
//         gap="8px"
//         direction="column"
//         width="unset"
//         height="unset"
//         justifyContent="flex-start"
//         alignItems="center"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         {...getOverrideProps(overrides, "Name")}
//       >
//         <Text
//           fontFamily="Inter"
//           fontSize="20px"
//           fontWeight="700"
//           color="rgba(13,26,38,1)"
//           lineHeight="25px"
//           textAlign="center"
//           display="block"
//           direction="column"
//           justifyContent="unset"
//           width="unset"
//           height="unset"
//           gap="unset"
//           alignItems="unset"
//           shrink="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           whiteSpace="pre-wrap"
//           children={match?.city}
//           {...getOverrideProps(overrides, "Melinda Marcus")}
//         ></Text>
//         <Text
//           fontFamily="Inter"
//           fontSize="16px"
//           fontWeight="400"
//           color="rgba(48,64,80,1)"
//           lineHeight="24px"
//           textAlign="center"
//           display="block"
//           direction="column"
//           justifyContent="unset"
//           letterSpacing="0.01px"
//           width="unset"
//           height="unset"
//           gap="unset"
//           alignItems="unset"
//           shrink="0"
//           position="relative"
//           padding="0px 0px 0px 0px"
//           whiteSpace="pre-wrap"
//           children={`${match?.price}${" $"}`}
//           {...getOverrideProps(overrides, "Design Engineer at Cloth Studios")}
//         ></Text>
//       </Flex>
//       <Flex
//         gap="50px"
//         direction="row"
//         width="100px"
//         height="100px"
//         justifyContent="center"
//         alignItems="center"
//         shrink="0"
//         alignSelf="stretch"
//         position="relative"
//         padding="0px 0px 0px 0px"
        
//         children={away}
//         {...getOverrideProps(overrides, "Frame37732839")}
//       ></Flex>
//     </Flex>
//   );
// }



// ////CompetitionSlide.jsx
// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Image, View } from "@aws-amplify/ui-react";
// import HeroLayout3 from "./HeroLayout3";
// export default function CompetitionSlide(props) {
//   const { overrides, ...rest } = props;
//   return (
//     <View
//       width="1440px"
//       height="858px"
//       display="block"
//       gap="unset"
//       alignItems="unset"
//       justifyContent="unset"
//       position="relative"
//       padding="0px 0px 0px 0px"
//       {...getOverrideProps(overrides, "CompetitionSlide")}
//       {...rest}
//     >
//       <Image
//         width="100%"
//         height="100%"
//         display="block"
//         gap="unset"
//         alignItems="unset"
//         justifyContent="unset"
//         position="absolute"
//         top="0%"
//         bottom="0%"
//         left="0%"
//         right="0%"
//         padding="0px 0px 0px 0px"
//         objectFit="cover"
//         {...getOverrideProps(overrides, "image")}
//       ></Image>
      
//     </View>
//   );
// }






////MatchLiteCom.jsx
//MatchLite.jsx
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
// import * as React from "react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { Flex, Text } from "@aws-amplify/ui-react";
// export default function MatchLite(props) {
//   const { matchlite, home, away, overrides, ...rest } = props;
//   return (
//     <Flex
//       gap="24px"
//       direction="row"
//       width="380px"
//       height="90px"
//       justifyContent="space-evenly"
//       alignItems="center"
//       position="relative"
//       borderRadius={'100px'}
//       backgroundColor="rgba(255,255,255,1)"
//       {...getOverrideProps(overrides, "MatchLite")}
//       {...rest}
//     >
//       <Flex
//         gap="0"
//         direction="row"
//         width="148px"
//         height="39px"
//         justifyContent="center"
//         alignItems="center"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 0px"
//         children={home}
//         {...getOverrideProps(overrides, "Frame")}
//       ></Flex>
//      <h5>VS</h5>
//       <Flex
//         gap="16px"
//         direction="column"
//         width="171px"
//         height="39px"
//         justifyContent="center"
//         alignItems="flex-start"
//         shrink="0"
//         position="relative"
//         padding="0px 0px 0px 20px"
//         children={away}
//         {...getOverrideProps(overrides, "Text37732805")}
//       ></Flex>
//     </Flex>
//   );
// }

