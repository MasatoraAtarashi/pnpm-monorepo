import { Button } from 'antd'
import { ButtonType } from 'antd/es/button'
import { PlayCircleTwoTone } from '@ant-design/icons'

type BuyerButtonProps = {
    label?: string
    onClick?: () => void
    icon?: React.ReactNode
    shape?: 'circle' | 'round'
    style?: React.CSSProperties
    videoUrl?: string
    disabled?: boolean
    size?: 'large' | 'middle' | 'small'
    type?: ButtonType
    className?: string
    danger?: boolean
}

export const BuyerButtonPlayVideo: React.FC<BuyerButtonProps> = (props) => {
    return (
        <BuyerButton
            {...props}
            icon={<PlayCircleTwoTone twoToneColor="#52c41a" />}
            onClick={() => {
                location.href = props.videoUrl || ''
            }}
        />
    )
}

export const BuyerButtonOK: React.FC<BuyerButtonProps> = (props) => {
    return <BuyerButton {...props} type="primary" />
}

export const BuyerButtonNG: React.FC<BuyerButtonProps> = (props) => {
    return <BuyerButton {...props} />
}

export const BuyerButton: React.FC<BuyerButtonProps> = (props) => {
    return (
        <Button
            className={props.className}
            size={props.size}
            onClick={props.onClick}
            type={props.type}
            icon={props.icon}
            shape={props.shape}
            style={props.style}
            disabled={props.disabled}
            danger={props.danger}
        >
            {props.label}
        </Button>
    )
}
