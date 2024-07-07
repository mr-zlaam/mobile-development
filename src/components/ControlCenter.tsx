import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ControlCenter() {
  const playbackState = usePlaybackState();
  // Next Button
  const skipToNxt = async () => {
    await TrackPlayer.skipToNext();
  };

  // Prev Button
  const skipToPrev = async () => {
    await TrackPlayer.skipToPrevious();
  };

  // Type guard to check if playbackState is of type State
  const isPlaybackState = (state: any): state is State => {
    return Object.values(State).includes(state);
  };

  // * toggler play back
  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrev}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable
        onPress={() => {
          togglePlayback(playbackState.state!);
        }}
      >
        <Icon
          style={styles.icon}
          name={playbackState.state === 'paused' ? 'play-arrow' : 'pause'}
          size={40}
        />
      </Pressable>
      <Pressable onPress={skipToNxt}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
