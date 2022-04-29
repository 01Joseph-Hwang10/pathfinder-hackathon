# Code conventions

## 폴더/파일 네이밍 컨벤션

기본적으로 모든 폴더, 파일은 kebab-case로 네이밍합니다.
kebab-case <- 이런 식으로 모든 문자는 소문자이고 '-'로 띄어쓰기를 구분하는게 kebab-case 입니다.

## 컴포넌트 컨벤션

특별한 이유가 없다면 컴포넌트는 함수형으로 작성합니다. 함수형 컴포넌트에서는 간결한 컴포넌트, 훅의 적극적인 사용, ES6문법의 적극적인 사용 등이 권장됩니다.

예시 : <- 아래는 styled-component를 적용한 사례로, 현 프로젝트와는 맞지 않는 부분이 있습니다. Tailwind.css와 관련한 코드 컨벤션은 아래에서 더 자세히 다루겠습니다.

```tsx
import ModuleIcon from '@src/components/common/module-icon';
import {getModuleName} from '@src/modules/block-definitions/helpers';
import {FunctionBlock} from '@src/modules/block-definitions/functions/function';
import {setAuxMode} from '@src/redux/slices/editor';
import {setFocusedFuncIdx} from '@src/redux/slices/workspace';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {batch, useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import FocusableBox from '@src/components/common/styled/focusable-box';
import Center from '@src/components/common/styled/center';
import {Span} from '@src/components/common/styled/text';

const ItemBox = styled(FocusableBox)`
  flex-direction: row;
  width: 100%;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 10px;
`;

const IconWrapper = styled(Center)`
  width: 30%;
  margin-right: 5px;
  flex-direction: row;
`;

const NameBox = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

interface PFunctionItem {
  func: FunctionBlock;
  funcIdx: number;
}

const FunctionItem: React.FC<PFunctionItem> = ({func, funcIdx}) => {
  const dispatch = useDispatch();
  const focusedFuncIdx = useSelector(
    (state: RootState) => state.workspace.focusedFuncIdx,
  );
  const focused = funcIdx === focusedFuncIdx;
  const onPress = () => {
    batch(() => {
      dispatch(setFocusedFuncIdx(funcIdx));
      dispatch(setAuxMode('config'));
    });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemBox focused={focused}>
        <IconWrapper>
          <ModuleIcon module={getModuleName(func?.funcName)} size={24} />
        </IconWrapper>
        <NameBox>
          <Span size={20} align="left">
            {func?.funcName?.truncate(4)}
          </Span>
        </NameBox>
      </ItemBox>
    </TouchableOpacity>
  );
};

export default FunctionItem;
```

클래스 컴포넌트를 사용하는 경우가 있을 수 있습니다. 예를 들어 부모 컴포넌트에서 ref를 통해 자식 컴포넌트를 제어하는 경우나, 컴포넌트가 매우 복잡해서 OOP패턴으로서 정리가 필요한 경우입니다. (예시가 궁금하면 현규를 불러주세요. 도큐멘테이션 쓰는 것도 ㄹㅇ 노동인듯;;)

## Tailwindcss + styled-component

우선, tailwindcss를 잘 이용한 코드 예시를 같이 봅시다.
참고 : https://github.com/CleverProgrammers/uber-clone-blockchain/blob/HEAD/components/RideSelector.js#L1-L82

```jsx
import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png'
import { useEffect, useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}

const RideSelector = () => {
  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext)

  console.log(basePrice)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image src={ethLogo} height={25} width={40} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector
```

저는 여기에 styled-component의 장점인 div hell 탈출을 더해보고자 합니다. (*styled-component라이브러리를 쓴다는 의미가 아닙니다. **div hell은 위의 예시처럼 컴포넌트 전체가 div로 꽉 차있어서 코드의 가독성이 떨어지는 현상을 말합니다)
위에서 제시한 FunctionItem 컴포넌트 예시는 이러한 div hell을 탈출하기 위해 styled-component를 사용하였습니다.
그러나 이번 프로젝트에서는 tailwindcss를 사용하므로, div hell을 탈출하기 위한 일환으로 이와 관련해 src/modules/classnamed-components 모듈을 만들었습니다.
**근데 편한거 사용하면 됩니다.** classnamed-components 별로이면 위에 있는 예시처럼 react-native style API 다루듯이 사용해도 됩니다.

위의 코드를 classed-components로 바꾸면 다음과 같습니다

```jsx
import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png'
import { useEffect, useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'
import classed from '@src/modules/classnamed-components' // classnamed-components 모듈 Path
import clsx from 'clsx'

const Wrapper = classed.div(`h-full flex flex-col`)
const Title = classed.div(`text-gray-500 text-center text-xs py-2 border-b`)
const CarList = classed.div`flex flex-col flex-1 overflow-scroll`;
const CarItem = classed.div<{ selected?: boolean }>(({selected}) =>
  clsx([
    tw`border-2 flex p-3 m-2 items-center`,
    selected ? tw`border-black` : tw`border-white`,
  ])
);
const CarImage = classed.div(`h-14`)
const CarDetails = classed.div(`ml-2 flex-1`)
const Service = classed.div(`font-medium`)
const Time = classed.div(`text-xs text-blue-500`)
const PriceContainer = classed.div(`flex items-center`)
const Price = classed.div(`mr-[-0.8rem]`)

const RideSelector = () => {
  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext)

  console.log(basePrice)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <CarItem
            key={index}
            selected={selectedRide.service === car.service}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <PriceContainer>
              <Price>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </Price>
              <Image src={ethLogo} height={25} width={40} />
            </PriceContainer>
          </CarItem>
        ))}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector
```

classed-components의 자세한 사용법은 classed-components 폴더 내의 README.md를 참조해주세요
