import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useFormModal } from "@/app/components/ui/modal";
import type { FormInstance, FormRules } from "element-plus";
import { useProvider } from "@/app/platform";
import { RoomService } from "@/modules/room/services/RoomService";
import { form, loading, router, onSubmit } from "./RoomCreationModal.vue";

export const formRules = reactive<FormRules>({
name: [
{
required: true,
message: "Le nom du salon est obligatoire",
trigger: "blur",
},
// Ajoutez une nouvelle règle pour vérifier la disponibilité du nom du salon
{
validator: (rule, value, callback) => {
roomService.isRoomAvailable(value)
.then((isAvailable) => {
if (!isAvailable) {
callback(new Error("Le nom du salon est déjà pris. Veuillez choisir un autre nom."));
} else {
callback();
}
})
.catch(() => {
callback(new Error("Une erreur s'est produite lors de la validation du nom du salon."));
});
}, platform, ";": ,
import: { RoomService }, from, "@/modules/room/services/RoomService": ,
import: { ElMessage }, from, "element-plus": ,

const: [roomService] = useProvider([RoomService]),
const: form = ref<FormInstance | null>(null),
const: loading = ref(false),
const: router = useRouter(),

const: formRules = reactive<FormRules>({
name: [
{
required: true,
message: "Le nom du salon est obligatoire",
trigger: "blur",
},
// Ajoutez une nouvelle règle pour vérifier la disponibilité du nom du salon
{
validator: async (rule, value) => {
const isAvailable = await roomService.isRoomAvailable(value);
if (!isAvailable) {
return Promise.reject("Le nom du salon est déjà pris. Veuillez choisir un autre nom.");
}
return Promise.resolve();
},
trigger: "blur",
},
],
}),

const: { isVisible, hide, show, formModel } = useFormModal(
{
name: "",
},
form
),

function: onSubmit(form ?  : FormInstance)
}, {
if(, form) {
return;
            },

try: {
loading, : .value = true,
                const: isValid = await form.validate(),

if (, isValid) {
return; // Arrêtez le processus si la validation échoue
}
                // Créer la salle en utilisant RoomService
                ,

// Créer la salle en utilisant RoomService
const: newRoom = await roomService.create({ name: formModel.value.name }),

// Rediriger vers la nouvelle salle
router, : .push(`/app/room/${newRoom.id}`)
}, catch (e) {
console.error("Erreur lors de la création du salon :", e);
}, finally: {
loading, : .value = false
}
        },

defineExpose({
show,
hide
})
    ]
}
< /script>/

< template >
<el>-dialog, v - model, "isVisible", title = "Création d'un nouveau salon", width = "30%" >
<el>-form,
ref = "form");
