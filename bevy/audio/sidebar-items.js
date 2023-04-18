window.SIDEBAR_ITEMS = {"enum":[["Volume","Defines the volume to play an audio source at."]],"fn":[["play_queued_audio_system","Plays audio currently queued in the [`Audio`] resource through the [`AudioOutput`] resource"]],"mod":[["prelude",""]],"struct":[["Audio","Use this [`Resource`] to play audio."],["AudioLoader","Loads files as [`AudioSource`] `Assets`"],["AudioOutput","Used internally to play audio on the current “audio device”"],["AudioPlugin","Adds support for audio playback to a Bevy Application"],["AudioSink","Asset controlling the playback of a sound"],["AudioSource","A source of audio data"],["GlobalVolume","Use this [`Resource`] to control the global volume of all audio with a [`Volume::Relative`] volume."],["PlaybackSettings","Settings to control playback from the start."],["SpatialAudioSink","Asset controlling the playback of a sound, or the locations of its listener and emitter."],["VolumeLevel","A volume level equivalent to a positive only float."]],"trait":[["AddAudioSource","A trait that allows adding a custom audio source to the object. This is implemented for [`App`][bevy_app::App] to allow registering custom [`Decodable`] types."],["AudioSinkPlayback","Common interactions with an audio sink."],["CpalSample","A trait for working generically across different Sample format types."],["Decodable","A type implementing this trait can be converted to a [`rodio::Source`] type. It must be [`Send`] and [`Sync`], and usually implements [`Asset`] so needs to be [`TypeUuid`], in order to be registered. Types that implement this trait usually contain raw sound data that can be converted into an iterator of samples. This trait is implemented for [`AudioSource`]. Check the example `audio/decodable` for how to implement this trait on a custom type."],["Sample","Represents a value of a single sample."],["Source","A source of samples."]]};