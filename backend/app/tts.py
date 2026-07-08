from google.cloud import texttospeech


def synthesize_hindi_mp3(text: str) -> bytes:
    """Create Hindi MP3 audio for reviewed article text.

    Production should cache the returned bytes in object storage and save the
    audio URL in the database. Do not synthesize unreviewed AI drafts for public
    pages.
    """
    client = texttospeech.TextToSpeechClient()
    synthesis_input = texttospeech.SynthesisInput(text=text[:4500])
    voice = texttospeech.VoiceSelectionParams(language_code="hi-IN")
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)
    response = client.synthesize_speech(input=synthesis_input, voice=voice, audio_config=audio_config)
    return response.audio_content
