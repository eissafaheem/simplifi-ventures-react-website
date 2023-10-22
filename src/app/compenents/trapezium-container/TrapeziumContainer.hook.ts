import { TrapeziumContainerProps } from "./TrapeziumContainer";

export const useTrapeziumContainerHook = (props: TrapeziumContainerProps) => {

    const { heading, content, image, imageAlign = "right" } = props;

    return {
        heading,
        content,
        image,
        imageAlign
    }
}