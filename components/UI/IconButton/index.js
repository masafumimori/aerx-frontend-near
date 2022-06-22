import React from "react";
import { IconButton, Icon, useColorModeValue } from "@chakra-ui/react";
import { SearchOutlined} from "@ant-design/icons";
import { IoHeartOutline, IoNotificationsOutline , IoChatbubbleOutline} from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import ThunderboltOutlined from "../../../public/thunderoutline.svg"


export const HeartIcon = () => {
    return (
        <IconButton 
            icon={<IoHeartOutline/>}
            variant="ghost"
            size="lg"
            isRound
            />
    );
};

export const NotificationIcon = () => {
    return (
        <IconButton 
            icon={<IoNotificationsOutline/>}
            variant="ghost"
            size="lg"
            isRound
            />
    );
};

export const CopyButton = () => {
    return (
        <IconButton  
            variant='ghost'
            colorScheme='gray'
            isRound
            icon={<MdCopyAll />} 
            ml={2} 
            />
    );
};

export const AddIconButton = () => {
    return (
        <IconButton
            type="submit"
            aria-label="post"
            isRound
            size="xs"
            icon={<AddIcon />}
            bgColor="#6054F0"
            color="white"
            />
    );
};

export const TagAddButton = () => {
    return (
        <IconButton
            aria-label="tag"
            isRound
            size="sm"
            icon={<AddIcon />}
            variant="ghost"
            color="#6054F0"
        />
    );
};

export const RepeatIconButton = () => {
    return (
        <IconButton
            aria-label="add-audio"
            isRound
            size="xs"
            variant="ghost"
            opacity={0.6}
            icon={<RepeatIcon />}
            ml={3}
            />
    );
};

export const AddImageIcon = () => {
    return (
        <IconButton
            aria-label="add-image"
            isRound
            size="xs"
            variant="ghost"
            icon={
                <Icon width="19" height="19" viewBox="0 0 19 19" fill="none" >
                    <path
                        d="M7.03409 4.80137C7.34519 3.48302 8.55499 2.5 10 2.5C11.445 2.5 12.6548 3.48302 12.9659 4.80137L13.0959 4.82783C15.0836 5.2324 16.6665 6.69859 17.1846 8.61505C17.6051 10.1707 17.6051 11.8063 17.1846 13.362C16.6665 15.2785 15.0836 16.7447 13.0959 17.1492L12.7161 17.2265C10.9246 17.5912 9.07538 17.5912 7.28394 17.2265L6.90411 17.1492C4.9164 16.7447 3.3335 15.2785 2.81542 13.362C2.39486 11.8063 2.39486 10.1707 2.81542 8.61504C3.3335 6.69859 4.9164 5.2324 6.90411 4.82783L7.03409 4.80137Z"
                        stroke={useColorModeValue("gray", "white")}
                        strokeOpacity="0.5"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.91663 10.8333C7.91663 9.68274 8.84937 8.75 9.99996 8.75C11.1506 8.75 12.0833 9.68274 12.0833 10.8333C12.0833 11.9839 11.1506 12.9167 9.99996 12.9167C8.84937 12.9167 7.91663 11.9839 7.91663 10.8333Z"
                        stroke={useColorModeValue("gray", "white")}
                        strokeOpacity="0.5"
                        strokeWidth="1.2"
                    />
                </Icon>
            }
            
        ></IconButton>
    );
};

export const AddAudioIcon = () => {
    return(
        <IconButton
            aria-label="add-audio"
            isRound
            size="xs"
            variant="ghost"
            icon={
                <Icon
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                >
                    <path
                        fill={useColorModeValue("gray", "white")}
                        fillOpacity="0.3"
                        d="M0.666626 9.86798L0.0679694 9.82785L0.066626 9.84789V9.86798H0.666626ZM0.686938 9.56495L1.28559 9.60508L0.686938 9.56495ZM17.313 9.56495L17.9116 9.52482V9.52482L17.313 9.56495ZM17.3333 9.86798H17.9333V9.84789L17.9319 9.82785L17.3333 9.86798ZM10.5284 1.65575L10.4074 2.24343V2.24343L10.5284 1.65575ZM7.47154 1.65575L7.59251 2.24343V2.24343L7.47154 1.65575ZM11.9913 13.8343L12.5807 13.7223L11.9913 13.8343ZM11.9913 11.5863L11.4018 11.4743L11.9913 11.5863ZM14.4672 9.03059L14.3003 8.45427L14.3003 8.45427L14.4672 9.03059ZM15.2419 8.92057V9.52057V8.92057ZM15.2419 16.5V17.1V16.5ZM14.4672 16.39L14.6342 15.8137L14.4672 16.39ZM17.3333 11.0606L16.7333 11.0605V11.0606H17.3333ZM14.2248 9.10081L14.3917 9.67713L14.3917 9.67713L14.2248 9.10081ZM14.2248 16.3198L14.0579 16.8961L14.0579 16.8961L14.2248 16.3198ZM17.3333 14.36H16.7333V14.36L17.3333 14.36ZM6.00863 13.8343L5.41918 13.7223L6.00863 13.8343ZM6.00863 11.5863L5.41918 11.6983L6.00863 11.5863ZM3.53266 9.03059L3.36575 9.6069H3.36575L3.53266 9.03059ZM2.75803 8.92057V9.52057V8.92057ZM2.75803 16.5V17.1V16.5ZM3.53266 16.39L3.69957 16.9663L3.69958 16.9663L3.53266 16.39ZM0.666631 11.0605H1.26663V11.0605L0.666631 11.0605ZM3.77513 9.10081L3.94204 8.52449L3.94204 8.52449L3.77513 9.10081ZM3.77513 16.3198L3.60822 15.7434L3.60821 15.7434L3.77513 16.3198ZM0.66663 14.36L1.26663 14.36V14.36H0.66663ZM1.26663 13.184L1.26663 9.86798H0.066626L0.0666261 13.184H1.26663ZM1.26528 9.9081L1.28559 9.60508L0.0882814 9.52482L0.0679694 9.82785L1.26528 9.9081ZM16.7143 9.60507L16.7346 9.9081L17.9319 9.82785L17.9116 9.52482L16.7143 9.60507ZM16.7333 9.86798V13.184H17.9333V9.86798H16.7333ZM17.9116 9.52482C17.6328 5.36458 14.6667 1.89503 10.6494 1.06807L10.4074 2.24343C13.88 2.95825 16.4704 5.96629 16.7143 9.60508L17.9116 9.52482ZM7.59251 2.24343C8.52154 2.05219 9.47838 2.05219 10.4074 2.24343L10.6494 1.06807C9.5607 0.843976 8.43922 0.843976 7.35057 1.06807L7.59251 2.24343ZM1.28559 9.60508C1.5295 5.96629 4.11995 2.95825 7.59251 2.24343L7.35057 1.06807C3.33325 1.89503 0.367145 5.36458 0.0882814 9.52482L1.28559 9.60508ZM14.6342 15.8137L14.3917 15.7434L14.0579 16.8961L14.3003 16.9663L14.6342 15.8137ZM14.3917 9.67713L14.6342 9.6069L14.3003 8.45427L14.0579 8.5245L14.3917 9.67713ZM12.5807 13.7223C12.4538 13.0539 12.4538 12.3667 12.5807 11.6983L11.4018 11.4743C11.2467 12.2907 11.2467 13.1299 11.4018 13.9463L12.5807 13.7223ZM14.6342 9.6069C14.832 9.54959 15.0365 9.52057 15.2419 9.52057V8.32057C14.9234 8.32057 14.6065 8.3656 14.3003 8.45427L14.6342 9.6069ZM15.2419 15.9C15.0365 15.9 14.832 15.871 14.6342 15.8137L14.3003 16.9663C14.6065 17.055 14.9234 17.1 15.2419 17.1V15.9ZM15.2419 9.52057C16.0527 9.52057 16.7333 10.197 16.7333 11.0605L17.9333 11.0606C17.9333 9.56037 16.7412 8.32057 15.2419 8.32057V9.52057ZM14.0579 8.52449C12.6921 8.92004 11.6696 10.0648 11.4018 11.4743L12.5807 11.6983C12.7664 10.7212 13.4713 9.9437 14.3917 9.67713L14.0579 8.52449ZM14.3917 15.7434C13.4713 15.4769 12.7664 14.6994 12.5807 13.7223L11.4018 13.9463C11.6696 15.3557 12.6921 16.5005 14.0579 16.8961L14.3917 15.7434ZM15.2419 17.1C16.7412 17.1 17.9333 15.8602 17.9333 14.36L16.7333 14.36C16.7333 15.2236 16.0527 15.9 15.2419 15.9V17.1ZM3.69958 16.9663L3.94204 16.8961L3.60821 15.7434L3.36575 15.8137L3.69958 16.9663ZM3.94204 8.52449L3.69957 8.45427L3.36575 9.6069L3.60822 9.67713L3.94204 8.52449ZM6.59809 13.9463C6.75319 13.1299 6.75319 12.2907 6.59809 11.4743L5.41918 11.6983C5.54616 12.3667 5.54616 13.0539 5.41918 13.7223L6.59809 13.9463ZM3.69957 8.45427C3.3934 8.3656 3.07653 8.32057 2.75803 8.32057V9.52057C2.96338 9.52057 3.16787 9.54959 3.36575 9.6069L3.69957 8.45427ZM2.75803 17.1C3.07653 17.1 3.39339 17.055 3.69957 16.9663L3.36575 15.8137C3.16787 15.871 2.96339 15.9 2.75803 15.9V17.1ZM2.75803 8.32057C1.2587 8.32057 0.0666227 9.56037 0.0666308 11.0606L1.26663 11.0605C1.26663 10.197 1.94726 9.52057 2.75803 9.52057V8.32057ZM3.60822 9.67712C4.52865 9.9437 5.23355 10.7212 5.41918 11.6983L6.59809 11.4743C6.33032 10.0648 5.3078 8.92004 3.94204 8.52449L3.60822 9.67712ZM3.94204 16.8961C5.3078 16.5005 6.33032 15.3557 6.59809 13.9463L5.41918 13.7223C5.23355 14.6994 4.52865 15.4769 3.60822 15.7434L3.94204 16.8961ZM2.75803 15.9C1.94726 15.9 1.26663 15.2236 1.26663 14.36L0.0666305 14.36C0.0666221 15.8602 1.25869 17.1 2.75803 17.1V15.9ZM16.7333 11.0606V14.36H17.9333V11.0606H16.7333ZM0.0666308 11.0605L0.0666305 14.36L1.26663 14.36L1.26663 11.0605H0.0666308Z"
                    />
                </Icon>
            }
        ></IconButton>
    );
};

export const ShareIconButton = ({...rest}) => {
    return (
        <IconButton
            isRound
            size="md"
            variant="ghost"
            icon={
                <Icon
                    width="19"
                    height="19"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path d="M17.3325 7.77194L17.7568 8.1962L18.181 7.77194L17.7568 7.34768L17.3325 7.77194ZM3.6 16.8246C3.6 12.1563 7.38438 8.37193 12.0527 8.37193V7.17193C6.72164 7.17193 2.4 11.4936 2.4 16.8246H3.6ZM12.0527 8.37193H17.3334V7.17193H12.0527V8.37193ZM13.9848 11.9681L17.7568 8.1962L16.9082 7.34768L13.1363 11.1196L13.9848 11.9681ZM17.7568 7.34768L13.9848 3.57574L13.1363 4.42426L16.9082 8.1962L17.7568 7.34768Z" fill={useColorModeValue("gray", "white")} fillOpacity="0.5"/>
                </Icon>
                }
            {...rest}    
        ></IconButton>
    );
};

export const CommentIconButton = ({...rest}) =>{
    return(
        <IconButton
            color = {useColorModeValue("gray.400", "white")}
            variant="ghost"
            size="lg"
            icon={<IoChatbubbleOutline />}
            isRound 
            {...rest} 
        />
    );
};

export const ChargeOutlineButton = ({ ...rest}) => {
    return(
        <IconButton
            isRound
            variant="ghost"
            icon={<Icon width="16px" height="16px" viewBox="0 0 24 24" fill="none" >
<path d="M18.7864 12.5907C18.8463 12.468 19.0275 12.0506 18.7834 11.5873L18.7834 11.5873C18.5393 11.124 18.0927 11.0373 17.9575 11.0174C17.8339 10.9992 17.6969 10.9997 17.6361 11C17.6301 11 17.6248 11 17.6204 11H13.8571L13.8571 2.64532C13.8571 2.63683 13.8572 2.62779 13.8572 2.61827C13.8573 2.51467 13.8576 2.35395 13.8403 2.21844C13.8307 2.14353 13.8061 1.98398 13.7199 1.81338C13.6177 1.61114 13.4165 1.37539 13.0828 1.27197C12.7491 1.16854 12.4498 1.2492 12.2511 1.35818C12.0835 1.45011 11.9731 1.56781 11.9228 1.62417C11.8319 1.72613 11.7412 1.85883 11.6827 1.94436C11.6774 1.95222 11.6723 1.95969 11.6675 1.96669L5.38997 11.1214C5.38746 11.125 5.38447 11.1294 5.38105 11.1343C5.34643 11.1843 5.26848 11.297 5.21363 11.4093C5.15366 11.532 4.97254 11.9494 5.21661 12.4127C5.46068 12.876 5.90733 12.9627 6.04247 12.9826C6.16606 13.0008 6.30307 13.0003 6.36393 13C6.36994 13 6.37521 13 6.37965 13H10.1429L10.1429 21.3547C10.1429 21.3632 10.1428 21.3722 10.1428 21.3817C10.1427 21.4853 10.1424 21.646 10.1597 21.7816C10.1693 21.8565 10.1939 22.016 10.2801 22.1866C10.3823 22.3889 10.5835 22.6246 10.9172 22.728C11.2509 22.8315 11.5502 22.7508 11.7489 22.6418C11.9165 22.5499 12.0269 22.4322 12.0772 22.3758C12.1681 22.2739 12.2588 22.1412 12.3173 22.0556C12.3226 22.0478 12.3277 22.0403 12.3325 22.0333L18.61 12.8786C18.6125 12.875 18.6155 12.8706 18.619 12.8657C18.6536 12.8156 18.7315 12.703 18.7864 12.5907Z" stroke="#FFE600" strokeWidth="2"/>
</Icon>}
            {...rest}
        />
    );
};


export const SearchIconButton = ({...rest}) => {
    return (
        <IconButton
        onClick={() => {


            
        }
        }
        as={SearchOutlined}
        isRound
        color="gray"
        variant="ghost"
        {...rest}
    />
    );
};



