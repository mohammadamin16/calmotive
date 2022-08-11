import React, {useEffect, useState} from "react";
import {SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {BackButton, BackButtonPlacement, BackButtonRotation} from "../BackButton";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;


interface PlanProps {
    isActive?: boolean,
    title: string,
    price: string,
    originalPrice: string,
    off: string,
    onPress?: () => void
}

export const Plan: React.FC<PlanProps> = (props) => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                width: "90%",
                backgroundColor: theme.main.color_4,
                paddingVertical: 20,
                flexDirection: "row-reverse",
                direction: "rtl",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: 25,
                marginBottom: 40,
                borderWidth: props.isActive ? 4 : 0,
                borderColor: theme.alternative.white,
            }}>
            {props.off && <View style={{
                backgroundColor: theme.main.color_3,
                borderColor: theme.alternative.white,
                borderWidth: props.isActive ? 2 : 0,
                borderRadius: 25,
                paddingHorizontal: 10,
                position: "absolute",
                top: "-50%",
            }}>
				<Body
					color={theme.alternative.white}
					weight={BodyWeight.Regular} size={BodySizes.Small}>
                    {props.off}
				</Body>
			</View>}
            <Body
                color={theme.alternative.white}
                weight={BodyWeight.Regular} size={BodySizes.Medium}>
                {props.title}
            </Body>

            <Body
                color={theme.alternative.white}
                weight={BodyWeight.Regular} size={BodySizes.Medium}>
                {props.price}
            </Body>

            <Body
                style={{opacity: .5}}
                color={theme.alternative.white}
                weight={BodyWeight.Regular} size={BodySizes.Small}>
                {props.originalPrice}
            </Body>
        </TouchableOpacity>
    )
}
export const ChoosePlanPage: React.FC<Props> = (props) => {
    const theme = useTheme()
    const [status, setStatus] = useState<"Playing" | "Stopping">("Stopping");

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            paddingTop: 100,
            alignItems: 'center',
        },
    });
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const plans: PlanProps[] = [
        {
            isActive: true,
            title: "اشتراک یک ماهه:",
            off: undefined,
            price: "49000 تومان",
            originalPrice: "",
        },
        {
            isActive: true,
            title: "اشتراک سه ماهه:",
            off: "20% تخفیف",
            price: "119000 تومان",
            originalPrice: "149000تومان"
        },
        {
            isActive: true,
            title: "اشتراک شش ماهه:",
            off: "33% تخفیف",
            price: "199000 تومان",
            originalPrice: "299000تومان"
        }

    ]

    const [select, setSelect] = useState<string>()
    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_1}/>

            <BackButton backScreen={Screens.ProfilePage}
                        rotation={BackButtonRotation.left}
                        placement={BackButtonPlacement.left}
            />

            <Body
                style={{marginBottom: 50}}
                weight={BodyWeight.Regular} size={BodySizes.Medium}>
                {"یک گزینه را انتخاب کنید:"}
            </Body>
            {plans.map(p =>
                <Plan
                    onPress={() => select === p.title ? setSelect(undefined) : setSelect(p.title)}
                    isActive={select === p.title}
                    key={p.title}
                    title={p.title}
                    price={p.price}
                    originalPrice={p.originalPrice}
                    off={p.off}
                />
            )}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(Screens.SuccessPaymentPage)
                    console.log(select)
                }}
                style={{
                    // opacity: select ? 1 : 0.5,
                    padding: 10,
                    paddingHorizontal: 30,
                    backgroundColor: theme.main.color_5,
                    borderRadius: 25,
                }}
            >

                <Body
                    color={theme.alternative.white}
                    weight={BodyWeight.Regular} size={BodySizes.Medium}>
                    {"پرداخت"}
                </Body>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


