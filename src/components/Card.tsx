import React from 'react';
import styled from '@emotion/styled'

const Stylecard = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 2px;
  list-style: none;
  margin: 10px 0px 0px 0px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  
`

const Card = (props:any) => {
    return (
        <Stylecard>
            {props.children}
        </Stylecard>
    );
};

export default Card;