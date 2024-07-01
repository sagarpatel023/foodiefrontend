import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading: IsCreateLoading} = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isLoading: IsUpdateLoading} = useUpdateMyRestaurant();

    const isEditing = !!restaurant;
  return (
    <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={IsCreateLoading || IsUpdateLoading}/>
  );
};

export default ManageRestaurantPage;