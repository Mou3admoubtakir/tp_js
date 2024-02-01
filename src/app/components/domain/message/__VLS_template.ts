import RichText from "@/app/components/ui/RichText.vue";
import BgImage from "../../ui/BgImage.vue";
import ItiEmojiPicker from "../../ui/emoji-picker/EmojiPicker.vue";
import EmojiIcon from "../../ui/icons/EmojiIcon.vue";
import MessageAttachements from "./MessageAttachements.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, displayMsg, onEmojiPicked, state, getCurrentDate } from "./Message.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ItiEmojiPicker', typeof __VLS_localComponents, "ItiEmojiPicker", "itiEmojiPicker", "iti-emoji-picker"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button"> &
__VLS_WithComponent<'BgImage', typeof __VLS_localComponents, "BgImage", "bgImage", "bg-image"> &
__VLS_WithComponent<'RichText', typeof __VLS_localComponents, "RichText", "RichText", "RichText"> &
__VLS_WithComponent<'MessageAttachements', typeof __VLS_localComponents, "MessageAttachements", "MessageAttachements", "MessageAttachements">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.ItiEmojiPicker; __VLS_components.itiEmojiPicker; __VLS_components["iti-emoji-picker"];
// @ts-ignore
[ItiEmojiPicker,];
__VLS_components.ElButton; __VLS_components.elButton; __VLS_components["el-button"];
// @ts-ignore
[ElButton,];
__VLS_components.BgImage; __VLS_components.bgImage; __VLS_components["bg-image"];
// @ts-ignore
[BgImage,];
__VLS_intrinsicElements.small; __VLS_intrinsicElements.small;
__VLS_components.RichText;
// @ts-ignore
[RichText,];
__VLS_components.MessageAttachements;
// @ts-ignore
[MessageAttachements,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{ onClick: {} as any, }, class: ("message"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("message"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onClick) };
__VLS_5 = { click: (__VLS_ctx.displayMsg) };
{
const __VLS_6 = __VLS_intrinsicElements["div"];
const __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6);
const __VLS_8 = __VLS_7({ ...{}, class: ("message-actions"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_8> & Record<string, unknown>) => void)({ ...{}, class: ("message-actions"), });
const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8)!;
let __VLS_10!: __VLS_NormalizeEmits<typeof __VLS_9.emit>;
{
const __VLS_11 = ({} as 'ItiEmojiPicker' extends keyof typeof __VLS_ctx ? { 'ItiEmojiPicker': typeof __VLS_ctx.ItiEmojiPicker; } : 'itiEmojiPicker' extends keyof typeof __VLS_ctx ? { 'ItiEmojiPicker': typeof __VLS_ctx.itiEmojiPicker; } : 'iti-emoji-picker' extends keyof typeof __VLS_ctx ? { 'ItiEmojiPicker': (typeof __VLS_ctx)["iti-emoji-picker"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ItiEmojiPicker;
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{ onPick: {} as any, }, ref: ("emojiPicker"), }));
({} as { ItiEmojiPicker: typeof __VLS_11; }).ItiEmojiPicker;
const __VLS_13 = __VLS_12({ ...{ onPick: {} as any, }, ref: ("emojiPicker"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{ onPick: {} as any, }, ref: ("emojiPicker"), });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
// @ts-ignore
(__VLS_ctx.emojiPicker);
let __VLS_16 = { 'pick': __VLS_pickEvent(__VLS_15['pick'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_13>).onPick) };
__VLS_16 = { pick: (__VLS_ctx.onEmojiPicked) };
}
{
const __VLS_17 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ onClick: {} as any, }, icon: ((__VLS_ctx.EmojiIcon)), circle: (true), size: ("small"), }));
({} as { ElButton: typeof __VLS_17; }).ElButton;
const __VLS_19 = __VLS_18({ ...{ onClick: {} as any, }, icon: ((__VLS_ctx.EmojiIcon)), circle: (true), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_19> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, icon: ((__VLS_ctx.EmojiIcon)), circle: (true), size: ("small"), });
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
let __VLS_21!: __VLS_NormalizeEmits<typeof __VLS_20.emit>;
let __VLS_22 = { 'click': __VLS_pickEvent(__VLS_21['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_19>).onClick) };
__VLS_22 = {
click: $event => {
__VLS_ctx.$refs.emojiPicker.show();
// @ts-ignore
[displayMsg, emojiPicker, onEmojiPicked, EmojiIcon, EmojiIcon, EmojiIcon, $refs,];
}
};
}
(__VLS_9.slots!).default;
}
{
const __VLS_23 = ({} as 'BgImage' extends keyof typeof __VLS_ctx ? { 'BgImage': typeof __VLS_ctx.BgImage; } : 'bgImage' extends keyof typeof __VLS_ctx ? { 'BgImage': typeof __VLS_ctx.bgImage; } : 'bg-image' extends keyof typeof __VLS_ctx ? { 'BgImage': (typeof __VLS_ctx)["bg-image"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).BgImage;
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ ...{}, class: ("message-user-photo"), src: (((__VLS_ctx.state.loggedUser?.pictureUrl)!)), }));
({} as { BgImage: typeof __VLS_23; }).BgImage;
const __VLS_25 = __VLS_24({ ...{}, class: ("message-user-photo"), src: (((__VLS_ctx.state.loggedUser?.pictureUrl)!)), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{}, class: ("message-user-photo"), src: (((__VLS_ctx.state.loggedUser?.pictureUrl)!)), });
const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!;
let __VLS_27!: __VLS_NormalizeEmits<typeof __VLS_26.emit>;
}
{
const __VLS_28 = __VLS_intrinsicElements["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
const __VLS_30 = __VLS_29({ ...{}, class: ("message-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("message-content"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
{
const __VLS_33 = __VLS_intrinsicElements["div"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
const __VLS_35 = __VLS_34({ ...{}, class: ("message-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, class: ("message-title"), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
{
const __VLS_38 = __VLS_intrinsicElements["small"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
const __VLS_40 = __VLS_39({ ...{}, class: ("message-date"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, class: ("message-date"), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
(__VLS_ctx.state.loggedUser?.username);
(__VLS_ctx.getCurrentDate());
(__VLS_41.slots!).default;
}
(__VLS_36.slots!).default;
}
{
const __VLS_43 = ({} as 'RichText' extends keyof typeof __VLS_ctx ? { 'RichText': typeof __VLS_ctx.RichText; } : typeof __VLS_resolvedLocalAndGlobalComponents).RichText;
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{}, text: ((__VLS_ctx.message.text)), }));
({} as { RichText: typeof __VLS_43; }).RichText;
const __VLS_45 = __VLS_44({ ...{}, text: ((__VLS_ctx.message.text)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{}, text: ((__VLS_ctx.message.text)), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47!: __VLS_NormalizeEmits<typeof __VLS_46.emit>;
}
{
const __VLS_48 = ({} as 'MessageAttachements' extends keyof typeof __VLS_ctx ? { 'MessageAttachements': typeof __VLS_ctx.MessageAttachements; } : typeof __VLS_resolvedLocalAndGlobalComponents).MessageAttachements;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{}, attachements: ((__VLS_ctx.message.attachements)), }));
({} as { MessageAttachements: typeof __VLS_48; }).MessageAttachements;
const __VLS_50 = __VLS_49({ ...{}, attachements: ((__VLS_ctx.message.attachements)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, attachements: ((__VLS_ctx.message.attachements)), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
let __VLS_52!: __VLS_NormalizeEmits<typeof __VLS_51.emit>;
}
(__VLS_31.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[state, state, state, state, getCurrentDate, message, message, message, message, message, message,];
return __VLS_slots;
}
