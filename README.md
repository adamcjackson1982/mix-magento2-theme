# mix-magento2-theme
Magento 2 boiler plate theme powered by Laravel mix. Just add yarn!

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn watch
```

### Compiles and minifies for production
```
yarn production
```

### Add the following to config.php
```
'system' => [
            'design' => [
                'theme' => [
                    'theme_id' => 'frontend/Vendor/Luma_Child'
                ]
            ]
        ]
    ]
```
Note: Change 'Vendor' to whatever you want!

### Watch the full tutorial here
See [Youtube](https://youtu.be/Rv3QOwjGaFs).