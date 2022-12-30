import React, {FC, memo} from "react";
import {Styled} from "./Header-syled";

export const Header: FC = memo(() => {
    return (
        <Styled.Wrapper>
            <Styled.Title>
                BVT1901 Bernadskiy Ilya - Counter MTUCI UX/UI
            </Styled.Title>
        </Styled.Wrapper>
    )
})