/**
 * Used to execute code when something is done by (or happens to) a player.
*/
export enum playerEvent {
    // PLOT EVENTS
    "playerJoinEvent" = "Join", "playerLeaveEvent" = "Leave", "playerCommandEvent" = "Command", 
    // CLICK EVENTS
    "playerRightClickEvent" = "RightClick", "playerLeftClickEvent" = "LeftClick", "playerRightClickEntityEvent" = "ClickEntity", "playerRightClickPlayerEvent" = "ClickPlayer", "playerPlaceBlockEvent" = "PlaceBlock", "playerBreakBlockEvent" = "BreakBlock", "playerSwapHandsEvent" = "SwapHands", "playerChangeSlotEvent" = "ChangeSlot",
    // MOVEMENT EVENTS
    "playerWalkEvent" = "Walk", "playerJumpEvent" = "Jump", "playerSneakEvent" = "Sneak", "playerUnsneakEvent" = "Unsneak", "playerStartSprintEvent" = "StartSprint", "playerStopSprintEvent" = "StopSprint","playerStartFlightEvent" = "StartFly", "playerStopFlightEvent" = "StopFly", "playerRiptideEvent" = "Riptide", "playerDismountEvent" = "Dismount", "playerHorseJumpEvent" = "HorseJump", "playerVehicleJumpEvent" = "VehicleJump",
    // ITEM EVENTS
    "playerClickMenuSlotEvent" = "ClickMenuSlot", "playerClickInvSlotEvent" = "ClickInvSlot", "playerPickupItemEvent" = "PickUpItem", "playerDropItemEvent" = "DropItem", "playerConsumeItemEvent" = "Consume", "playerBreakItemEvent" = "BreakItem", "playerCloseInventoryEvent" = "CloseInv", "playerFishEvent" = "Fish",
    // DMG EVENTS
    "playerTakeDmgEvent" = "PlayerTakeDmg", "playerDmgPlayerEvent" = "PlayerDmgPlayer", "playerDmgEntityEvent" = "DamageEntity", "entityDmgPlayerEvent" = "EntityDmgPlayer", "playerHealEvent" = "PlayerHeal", "playerShootBowEvent" = "ShootBow", "playerShootEvent" = "ShootProjectile", "playerProjHitEvent" = "ProjHit", "projDmgPlayerEvent" = "ProjDmgPlayer", "potionCloudEffectPlayer" = "CloudImbuePlayer",
    // DEATH EVENTS
    "playerDeathEvent" = "Death", "playerKillPlayerEvent" = "KillPlayer", "playerKillMobEvent" = "KillMob", "mobKillPlayerEvent" = "MobKillPlayer", "playerRespawnEvent" = "Respawn"
}

/**
 * Used to execute code when an entity does something or when something happens to an entity.
*/
export enum entityEvent {
    // DMG EVENTS
    "entityDamageEntityEvent" = "EntityDmgEntity", "entityKillEntityEvent" = "EntityKillEntity", "entityTakeDamage" = "EntityDmg", "entityDeathEvent" = "EntityDeath", "vehicleTakeDamageEvent" = "VehicleDamage", "projKillEntityEvent" = "ProjDmgEntity",
    // OTHER EVENTS
    "blockFallEvent" = "BlockFall", "fallingBlockLandEvent" = "FallingBlockLand"
}

/**
 * Used to create functions and processes. Create using {@link createCustomEvent}
*/
export enum customIdentifyedEvent {
    "function" = "func", "process" = "process"
}

export type customEvent ={
    eventType : customIdentifyedEvent,
    name : String
}

function createCustomEvent(eventType : customIdentifyedEvent, name : String): customEvent {
    return {eventType: eventType, name: name}
}