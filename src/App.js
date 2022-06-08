import './App.css';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorMode,
  Stack,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import {FaAngleRight, FaAtlassian, FaEnvelope, FaGithub} from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa";

function App() {

  const {toggleColorMode} = useColorMode();

  return (
    <div className="App">

    <div id='darkmode'>
      <button id='colormode' onClick={toggleColorMode}>Dark Mode</button>
    </div>

    <div id='ul'>
      <ul>
        <li><FaGithub /></li>
        <li><FaAffiliatetheme /></li>
        <li><FaAtlassian /></li>
      </ul>
    </div>

    <div id='button'>
      <Stack direction='row' spacing={4}>
        <Button leftIcon={<FaEnvelope />} colorScheme='teal' variant='solid'>
          Email
        </Button>
        <Button rightIcon={<FaAngleRight />} colorScheme='teal' variant='outline'>
          Call us
      </Button>
      </Stack>
    </div>

    <div id='popup'>
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
    </div>

    <div id='slider1'>
      <Slider aria-label='slider-ex-1' defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>

    <div id='slider2'>
      <Slider
        aria-label='slider-ex-3'
        defaultValue={30}
        orientation='vertical'
        minH='32'
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
     </Slider>
    </div>

    <div id='progress1'>
       <CircularProgress isIndeterminate color='green.300' />
    </div>

    </div>
  );
}

export default App;
