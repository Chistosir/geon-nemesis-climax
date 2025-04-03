namespace SpriteKind {
    export const extra = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . f f f f f . . . . . . 
        . f f c c c c f . . . . . 
        f f c c c c c c f f . . . 
        f f c c f c c c c c f . . 
        f f f f f c c c c c f . . 
        . f f f f c c f c c f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        d d d f f f f f f d d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . f f f f f . . . . . . 
        . f f c c c c f . . . . . 
        f f c c c c c c f f . . . 
        f f c c f c c c c c f . . 
        f f f f f c c c c c f . . 
        . f f f f c c f c c f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f d d d . 
        d d d f f f f f f . . . . 
        . . . f f f f f f . . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . f f f f f . . . . . . 
        . f f c c c c f . . . . . 
        f f c c c c c c f f . . . 
        f f c c f c c c c c f . . 
        f f f f f c c c c c f . . 
        . f f f f c c f c c f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f f f f f f f f f f f . . 
        f f f f f f f f f f f f . 
        d d d f f f f f f f f f . 
        . . . f f f f f f d d d . 
        . . . f f f f f f . . . . 
        . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    story.clearAllText()
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.MovementAnimation, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f . 
        . f c c f f f c c f f c . 
        . f f f f d f f f f c c . 
        . . . f d d f f f f f f . 
        . . . f d d f b d d d f . 
        . . . f d d f 1 d d d f . 
        . . . f f d d d d f f f . 
        . . . f f f d d d f f f . 
        . . . f 1 f f f f d d f . 
        . . f f 1 f f f f d d f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f . 
        . f c c f f f c c f f c . 
        . f f f f d f f f f c c . 
        . . . f d d f f f f f f . 
        . . . f d d f b f d d f . 
        . . . f d d f 1 d d d f . 
        . . . f f d d d d f f f . 
        . . . f f f d d d d f . . 
        . . . f 1 f f f f f f . . 
        . . . f 1 f f f d d f . . 
        . . . f 1 f f f d d f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        . f f f c f f f c f f f . 
        . c f f c c f f f c c f . 
        . c c f f f f d f f f f . 
        . f f f f f f d d f . . . 
        . f d d d b f d d f . . . 
        . f d d d 1 f d d f . . . 
        . f f f d d d d f f . . . 
        . f f f d d d f f f . . . 
        . f d d f f f f 1 f . . . 
        . f d d f f f f 1 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        . f f f c f f f c f f f . 
        . c f f c c f f f c c f . 
        . c c f f f f d f f f f . 
        . f f f f f f d d f . . . 
        . f d d f b f d d f . . . 
        . f d d d 1 f d d f . . . 
        . f f f d d d d f f . . . 
        . . f d d d d f f f . . . 
        . . f f f f f f 1 f . . . 
        . . f d d f f f 1 f . . . 
        . . f d d f f f 1 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f f . . . 
        `],
    200,
    true
    )
})
let mySprite: Sprite = null
let Storyteller: Sprite = null
story.startCutscene(function () {
    scene.setBackgroundColor(0)
    Storyteller = sprites.create(assets.image`0`, SpriteKind.Player)
    Storyteller.setPosition(150, 50)
    story.spriteMoveToLocation(Storyteller, 80, 50, 100)
    story.printDialog("This is a world where magic exists.", 80, 90, 50, 150, 15, 13, story.TextSpeed.Normal)
    story.printDialog("Due to the excessive use of magic the world has, beings are made of magic energy.", 80, 90, 50, 150, 15, 13, story.TextSpeed.Normal)
    story.printDialog("Hunters are hired to execute these beings to maintain safety to the public.", 80, 90, 50, 150, 15, 13, story.TextSpeed.Normal)
    story.printDialog("One of these hunters goes by the name of <Geon>.", 80, 90, 50, 150, 15, 13, story.TextSpeed.Normal)
    sprites.destroy(Storyteller)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f f d d f f c c f . 
        . f f b f d d f b f f . . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        d d f f 1 f f 1 f f d d . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    tiles.setCurrentTilemap(tilemap`beginning`)
    scene.cameraFollowSprite(mySprite)
    scene.setBackgroundImage(img`
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        777777777777777777777777777777
        `)
    story.cancelCurrentCutscene()
})
story.startCutscene(function () {
    story.printCharacterText("BZT BZT (press B to use)", "Phone")
    pauseUntil(() => controller.B.isPressed())
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f . 
        . f d 1 f d d 1 f d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f . 
        . f d 1 f d d 1 f d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f . . 
        f f f f 1 f f 1 f f f . . 
        d d f f 1 f f 1 f f d . . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f . 
        . f d 1 f d d 1 f d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f d d . 
        . . . f f f f f f . f f . 
        . . . f f . . f f . f f . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f . 
        . f d 1 f d d 1 f d f . . 
        . f d d d d d d d d f . . 
        . f f f d f f d f f f . . 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f d d . 
        d d f f 1 f f 1 f f f f . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . f f f f . . . 
        . . . . f f f c f f f . . 
        . . f f f f c c f f f c . 
        . f f c f f f f f f f c . 
        . c c f f f d d f f c c . 
        . f f f d d d d f c c f . 
        . f f f f d d f f f f f f 
        . f d 1 f d d 1 f d f f f 
        . f d d d d d d d d f f d 
        . f f f d f f d f f f d d 
        f f f f f f f f f f f f . 
        f f f f 1 f f 1 f f f f . 
        d d f f 1 f f 1 f f f f . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    200,
    false
    )
})
