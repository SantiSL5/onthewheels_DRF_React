from onthewheels.apps.core.renderers import onthewheelsJSONRenderer


class ProfileJSONRenderer(onthewheelsJSONRenderer):
    object_label = 'profile'
    pagination_object_label = 'profiles'
    pagination_count_label = 'profilesCount'
